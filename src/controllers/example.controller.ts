import { Controller, Post, Get, Put, Delete, Patch, All } from '@nestjs/common';
import { Manager } from '@suppa/sdk';
import { ExampleJob } from '../jobs';
import { DiscoveryService } from '@nestjs/core';

@Controller('example-controller')
export class ExampleController {
	@Get('get-path')
	getMethod() {}

	@Post('post-path')
	postMethod() {
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
