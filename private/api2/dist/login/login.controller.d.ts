import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(body: any, req: any): Promise<{
        statusCode: number;
        message: string;
        access_token: string;
        data: any;
    }>;
    logout(body: any, req: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    create(createLoginDto: CreateLoginDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLoginDto: UpdateLoginDto): string;
    remove(id: string): string;
}
