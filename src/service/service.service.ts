import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Prisma, Service} from "@prisma/client";

@Injectable()
export class ServiceService {
    constructor(private  prismaService:PrismaService) {
    }
    getAll(){
        return this.prismaService.service.findMany();
    }

    createService(data: Prisma.ServiceCreateInput): Promise<Service> {
        return this.prismaService.service.create({data})
    }

    deleteById(id: string) {
        return this.prismaService.service.delete({ where: { id: +id } });
    }
}
