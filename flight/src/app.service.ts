import { Injectable, OnModuleInit } from '@nestjs/common';
import { FLIGHT } from './kafka/constant';
import { ConsumerService } from './kafka/Consumer.service';

@Injectable()
export class AppService {
  constructor(private readonly consumerService: ConsumerService) { }

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: [FLIGHT.BOOK_FLIGHT] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            value: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
          })
        }
      }
    )
  }

  getHello(): string {
    return 'Hello World!';
  }
}
