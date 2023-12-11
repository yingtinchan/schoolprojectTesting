import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column({ default: true })
  available: boolean;
  
  @Column({ default: '' })
  borrower_student_id: string;

  @Column({ default: '' })
  borrower_teacher_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}