import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { AdminService } from './admin/admin.service';
export declare class AppController {
    private readonly appService;
    private readonly loginService;
    private readonly adminService;
    constructor(appService: AppService, loginService: LoginService, adminService: AdminService);
    getHello(): string;
}
