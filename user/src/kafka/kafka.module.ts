import { Module } from '@nestjs/common';
import { KafkaProducerService } from './Producer.service';

@Module({
    providers: [KafkaProducerService],
    exports: [KafkaProducerService]
})
export class KafkaModule { }