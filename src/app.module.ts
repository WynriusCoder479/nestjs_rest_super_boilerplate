import { ConfigModule } from '@common/config';
import { DatabaseModule } from '@common/database';
import { LoggerModule } from '@common/logger';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
	imports: [ConfigModule, LoggerModule, DatabaseModule],
	controllers: [AppController],
})
export class AppModule {}
