import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { MongooseModule } from '@nestjs/mongoose';
import {BusinessSchema} from "./schemas/business.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'business', schema: BusinessSchema }])],
  controllers: [
      BusinessController
  ],
  providers: [BusinessService]
})
export class BusinessModule {}
