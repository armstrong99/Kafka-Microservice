import { Module } from '@nestjs/common';
import { ConsumerService } from './Consumer.service';

@Module({
    providers: [ConsumerService],
    exports: [ConsumerService]
})
export class KafkaModule { }