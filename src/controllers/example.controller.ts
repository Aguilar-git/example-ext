import {
	Controller,
	Post,
	Get,
	Put,
	Delete,
	All,
	Body,
	Headers,
} from '@nestjs/common';
import { Manager } from '@suppa/sdk';

@Controller('example-controller')
export class ExampleController {
	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod(@Body() body: any, @Headers() headers: any) {
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
