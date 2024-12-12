import { Controller, Post, Get, Put, Delete, Patch, All } from '@nestjs/common';

@Controller('example-controller')
export class ExampleController {
	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod() {}

	@Put('put-path')
	putMethod() {}

	@Delete('delete-path')
	deleteMethod() {}

	@All('all-path')
	allMethod() {}
}
