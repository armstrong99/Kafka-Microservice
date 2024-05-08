import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { KafkaModule } from './kafka/kafka.module';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [AccountModule, AuthModule, KafkaModule, FlightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
