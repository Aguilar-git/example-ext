import { Controller, Post, Get, Put, Delete, Patch, All } from '@nestjs/common';
import { Manager } from '@suppa/sdk';

@Controller('example-controller')
export class ExampleController {
	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod(request: any, manager: Manager) {
		const body = {
			response: 'My custom response',
			manager: Object.getOwnPropertyNames(manager),
		};

		return body;
	}

	@Put('put-path')
	putMethod() {}

	@Delete('delete-path')
	deleteMethod() {}

	@All('all-path')
	allMethod() {}
}
