import {Body, Controller, Get, HttpException, HttpStatus, Post} from '@nestjs/common';
import {CreateBusinessDto} from "./dtos/create-business.dto";
import {IBusiness} from "./interfaces/business.interface";
import {BusinessService} from "./business.service";

@Controller('pipedrive')
export class BusinessController {
    constructor(
        private readonly businessService: BusinessService,
    ) {
    }

    @Post('webhook')
    async saveBusiness(@Body() createCategoryDto: CreateBusinessDto): Promise<IBusiness>{
        return await this.businessService.sendToBling(createCategoryDto);
    }

    @Get()
    async getAllExpenses(): Promise<IBusiness[]> {
        return await this.businessService.getAllBusiness();
    }
}
