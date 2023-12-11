import { Repository } from 'typeorm';
import { User } from '../entitly/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
export declare class LoginService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    login(_id: any, _password: any): Promise<{
        statusCode: number;
        message: string;
        access_token: string;
        data: any;
    }>;
    create(createLoginDto: CreateLoginDto): string;
    logout(_token: any, _type: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLoginDto: UpdateLoginDto): string;
    remove(id: number): string;
}
