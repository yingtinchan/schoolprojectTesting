import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ){}

  create(createBookDto: CreateBookDto) {
    const data = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(data);
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  findByName(name:string){
    return this.bookRepository
    .createQueryBuilder("book")
    .where("book.name like :name", { name:`%${name}%` })
    .getMany();
  }

  findByAuthor(author:string){
    return this.bookRepository
    .createQueryBuilder("book")
    .where("book.author like :author", { author:`%${author}%` })
    .getMany();
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update(id, {    
      available: false,
      borrower_student_id: updateBookDto.borrower_student_id as string,
      borrower_teacher_id: updateBookDto.borrower_teacher_id as string});
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
