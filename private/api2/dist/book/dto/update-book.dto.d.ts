import { CreateBookDto } from './create-book.dto';
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
    available: boolean;
    borrower_student_id?: String;
    borrower_teacher_id?: String;
}
export {};
