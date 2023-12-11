import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    addUser(body: any, req: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    create(createAdminDto: CreateAdminDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAdminDto: UpdateAdminDto): string;
    remove(id: string): string;
}
