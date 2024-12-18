import { Job, QueryManager, SubscribeJob } from '@suppa/sdk';

@Job('example-job')
export class ExampleJob {
	@SubscribeJob()
	testJobMethod(manager: QueryManager) {}
}
