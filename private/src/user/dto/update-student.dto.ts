import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    name?: string;
    email?: string;
    password?: string;
}
