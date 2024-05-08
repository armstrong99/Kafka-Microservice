import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  controllers: [FlightController],
  providers: [FlightService],
  imports: [KafkaModule]
})
export class FlightModule { }
