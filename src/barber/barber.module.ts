import { Module } from '@nestjs/common';
import { BarberController } from './barber.controller';
import { BarberService } from './barber.service';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [BarberController],
  providers: [BarberService, PrismaService],
})
export class BarberModule {}
