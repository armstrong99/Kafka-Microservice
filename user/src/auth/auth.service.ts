import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { KafkaProducerService } from '../kafka/Producer.service';
import { FLIGHT } from "../kafka/constant"
@Injectable()
export class AuthService {
    constructor(private usersService: AccountService, private jwtService: JwtService, private kafkaProducer: KafkaProducerService) { }

    /**
     * @description On prouduction the password should be encrypted and compared against a harsh
     * @param username 
     * @param pass 
     * @returns 
     */

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        const payload = { sub: user.userId, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
