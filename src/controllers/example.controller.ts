import {
	Controller,
	Post,
	Get,
	Put,
	Delete,
	All,
	Body,
	Request,
} from '@nestjs/common';

@Controller('example-controller')
export class ExampleController {
	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod(@Request() request: any) {
		console.log(request['manager']);
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
