import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConsumerService } from './kafka/Consumer.service';
import { FLIGHT } from './kafka/constant';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly consumerService: ConsumerService) { }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
