import { Job, Manager, QueryManager, SubscribeJob } from '@suppa/sdk';

@Job('example-job')
export class ExampleJob {
	@SubscribeJob()
	testJobMethod(@Manager() manager: QueryManager) {
		console.log('---- Job ----');
		console.log(manager);
	}
}
