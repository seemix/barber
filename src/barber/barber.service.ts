import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Barber } from '@prisma/client';

@Injectable()
export class BarberService {
  constructor(private prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.barber.findMany();
  }

  updateById(barber) {
    const {id} = barber;
    return this.prismaService.barber.update({
      where: { id: +id },
      data: { ...barber },
    });
  }

  createBarber(data: Prisma.BarberCreateInput): Promise<Barber> {

      return this.prismaService.barber.create({data});
  }

   deleteById(id: string) {
     return this.prismaService.barber.delete({ where: { id: +id } });
  }
}
