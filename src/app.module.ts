import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessModule } from './pipedrive/business.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.NODE_ENV == 'development' ?
        process.env.DATABASE_HOSTDEV : process.env.DATABASE_HOST,
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: true,
        }),
      BusinessModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
