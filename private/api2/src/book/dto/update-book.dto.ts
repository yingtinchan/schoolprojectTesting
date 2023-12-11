import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    available: boolean;
    borrower_student_id?: String;
    borrower_teacher_id?: String;
}
