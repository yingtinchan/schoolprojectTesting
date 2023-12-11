import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ){}

  create(createStudentDto: CreateStudentDto) {
    const data = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(data);
  }

  findAll() {
    return this.studentRepository.find()
  }

  findOne(id: string) {
    return this.studentRepository.createQueryBuilder("student")
    .where("student.student_id = :id", {id:id}).getOne();
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
