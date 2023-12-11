import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entitly/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getStudents(_name: any): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
