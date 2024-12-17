import { Controller, Post, Get, Put, Delete, All, Body } from '@nestjs/common';
import { Account, Manager, QueryManager, TAccount } from '@suppa/sdk';

@Controller('example-controller')
export class ExampleController {
	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod(
		@Body() body: any,
		@Manager() manager: QueryManager,
		@Account() account: TAccount,
	) {
		console.log(body, manager);

		return {
			response: 'My custom response',
		};
	}

	@Put('put-path')
	putMethod() {}

	@Delete('delete-path')
	deleteMethod() {}

	@All('all-path')
	allMethod() {}
}
