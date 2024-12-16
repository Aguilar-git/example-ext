import { Controller, Post, Get, Put, Delete, All, Body } from '@nestjs/common';

@Controller('example-controller')
export class ExampleController {
	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod(@Body() body: any) {
		console.log(body);
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
