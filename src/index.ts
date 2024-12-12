import { ExampleController } from './controllers';
import { ExampleExtension } from './extensions';
import { ExampleJob } from './jobs';
import { DiscoveryModule } from '@nestjs/core';
import { Module } from '@nestjs/common';

@Module({
	imports: [DiscoveryModule],
	controllers: [ExampleController],
	providers: [ExampleExtension, ExampleJob],
})
export class AppModule {}
