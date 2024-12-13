import { Controller, Post, Get, Put, Delete, Patch, All } from '@nestjs/common';
import { Manager } from '@suppa/sdk';
import { ExampleJob } from '../jobs';

@Controller('example-controller')
export class ExampleController {
	constructor(private readonly exampleJob: ExampleJob) {
		console.log(exampleJob);
	}

	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod(request: any, manager: Manager) {
		return {
			response: 'My custom response',
			manager: Object.getOwnPropertyNames(manager),
		};
	}

	@Put('put-path')
	putMethod() {}

	@Delete('delete-path')
	deleteMethod() {}

	@All('all-path')
	allMethod() {}
}
