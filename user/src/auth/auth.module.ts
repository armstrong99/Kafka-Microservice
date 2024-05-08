import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountService } from 'src/account/account.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AccountService],
  imports: [KafkaModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),]
})
export class AuthModule { }
