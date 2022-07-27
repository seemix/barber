import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarberModule } from './barber/barber.module';
import {PrismaService} from "./prisma.service";
import { ServiceModule } from './service/service.module';

@Module({
  imports: [BarberModule, PrismaService, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
