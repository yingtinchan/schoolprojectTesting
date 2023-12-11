import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ unique: true })
    teacher_id: string;
  
    @Column()
    name: string;
  
    @Column()
    password: string;
  
    @Column()
    email: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}
