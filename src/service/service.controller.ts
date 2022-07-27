import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {ServiceService} from './service.service'
import {CreateServiceDto} from "../barber/dto/create-service.dto";

@Controller('service')
export class ServiceController {
    constructor(private serviceService:ServiceService) {
    }
    @Get('/')
    getAll(){
        return this.serviceService.getAll()
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/')
    create(@Body() serviceData: CreateServiceDto) {
        console.log(serviceData);
        return this.serviceService.createService(serviceData);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.serviceService.deleteById(id);
    }
}
