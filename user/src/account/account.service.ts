import { Injectable } from '@nestjs/common';
import { IUser } from 'src/@types';

@Injectable()
export class AccountService {
    private readonly users = [
        {
            userId: 35,
            username: 'Obi',
            password: '1200',
        },
        {
            userId: 40,
            username: 'James',
            password: '0910',
        },
    ];

    async findOne(username: string): Promise<IUser | undefined> {
        return this.users.find(user => user.username === username);
    }

}
