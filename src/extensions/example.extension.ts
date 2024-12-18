import {
	ComparatorEnum,
	Extension,
	Manager,
	OperatorEnum,
	UpdateParams,
	AfterUpdate,
	BeforeUpdate,
	Account,
	QueryManager,
	TAccount,
} from '@suppa/sdk';
import { TaskEntity } from '../entities';
import { DateCalculator } from '../utils';

@Extension('tasks')
export class ExampleExtension {
	@BeforeUpdate()
	async beforeUpdate(
		params: UpdateParams,
		manager: QueryManager,
		account: TAccount,
	): Promise<UpdateParams> {
		const { start_date, duration, end_date } = params.fields;
		if (!start_date && !duration && !end_date) return params;

		const dateCalc = DateCalculator.getInstance();
		const calcResult =
			start_date && end_date
				? dateCalc.calculateDuration(start_date, end_date)
				: start_date
					? dateCalc.calculateEndDate(start_date, duration)
					: dateCalc.calculateStartDate(duration, end_date);

		params.fields.start_date = calcResult.start.toISOString();
		params.fields.end_date = calcResult.end.toISOString();
		params.fields.duration = calcResult.duration;

		return params;
	}

	@AfterUpdate()
	async afterUpdate(
		records: TaskEntity[],
		manager: QueryManager,
		account: TAccount,
	): Promise<TaskEntity[]> {
		const [firstTask] = records;
		const projectId = firstTask?.project?.id;
		const taskIds = records.map((rec) => rec.id);

		if (projectId)
			new Promise<void>(async (resolve) => {
				const task = await manager.sudo.findOne<TaskEntity>('tasks', {
					select: {
						id: true,
					},
					where: {
						operator: OperatorEnum.And,
						filters: [
							{
								field: 'parent.id',
								comparator: ComparatorEnum.In,
								value: taskIds,
							},
						],
					},
				});

				if (!task) return resolve();

				await manager.sudo.update<TaskEntity>('tasks', {
					fields: {
						project: {
							id: projectId,
						},
					},
					conditions: {
						operator: OperatorEnum.And,
						filters: [
							{
								field: 'parent.id',
								comparator: ComparatorEnum.In,
								value: taskIds,
							},
						],
					},
				});

				return resolve();
			});

		return records;
	}
}
