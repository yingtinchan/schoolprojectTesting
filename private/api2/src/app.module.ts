import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitly/user.entity';
import { Book } from './book/entities/book.entity';
import { BookModule } from './book/book.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { Student } from './student/entities/student.entity';
import { Teacher } from './teacher/entities/teacher.entity';
import { Admin } from './admin/entities/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'mrKay',
      password: 'root',
      database: 'school',
      entities: [User, Book, Student, Teacher, Admin],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    LoginModule,
    AdminModule,
    BookModule,
    UserModule,
    StudentModule,
    TeacherModule
  ],
  //controllers: [UsersController],
  //providers: [UsersService],
})
export class AppModule {}