import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {BarberService} from "./barber.service";
import {CreateBarberDto} from "./dto/create-barber.dto";
import {UpdateBarberDto} from "./dto/update-barber.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Controller('barber')
export class BarberController {
    constructor(private barberService: BarberService) {
    }

    @Get('/')
    getAll() {
        return this.barberService.getAll();
    }

    @HttpCode(HttpStatus.OK)
    @Put('/')
    @UseInterceptors(
        FileInterceptor('avatar', {
            storage: diskStorage({
                destination: './avatars',
                filename: (req,file, cb) => {
                    const randomName = Array(32)
                        .fill(null)
                        .map(()=>Math.round(Math.random()*16).toString(16))
                        .join('');
                    return cb(null, randomName);
                }
            })
           // FileFilter: imageFileFilter()
        })
    )
    updateById(@Body() barberData: UpdateBarberDto, @UploadedFile() avatar: Express.Multer.File) {
        return this.barberService.updateById(barberData);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/')
    create(@Body() barberData: CreateBarberDto) {
        console.log(barberData);
        return this.barberService.createBarber(barberData);
    }

    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    deleteBarber(@Param('id') id: string) {
        return this.barberService.deleteById(id);
    }


}
