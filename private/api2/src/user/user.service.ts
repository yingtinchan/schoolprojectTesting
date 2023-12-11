
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from '../entitly/user.entity';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getAdmins(_id){
      console.log("id="+_id);
      var _ext = "";
      if(_id!="undefined"){
          _ext += " and admin_id='"+_id+"'";
      }

      const data = await this.userRepository
          .query('select admin_id, name, email, created_at, updated_at from admin where 1=1 and token is not NULL' + _ext);
      console.log(JSON.stringify(data[0]));
      if(JSON.stringify(data[0])==undefined || JSON.stringify(data[0])==""){
          throw new UnauthorizedException();
      }

      return {
          "statusCode": 200,
          "message": "success",
          data:data[0]
      };
    }

    async getTeachers(_id){
      console.log("id="+_id);
      var _ext = "";
      if(_id!="undefined"){
          _ext += " and teacher_id='"+_id+"'";
      }

      const data = await this.userRepository
          .query('select teacher_id, name, email, created_at, updated_at from teacher where 1=1 and token is not NULL' + _ext);
      console.log(JSON.stringify(data[0]));
      if(JSON.stringify(data[0])==undefined || JSON.stringify(data[0])==""){
          throw new UnauthorizedException();
      }

      return {
          "statusCode": 200,
          "message": "success",
          data:data[0]
      };
    }

    async getStudents(_id){
        console.log("student_id="+_id);
        var _ext = "";
        if(_id!="undefined"){
            _ext += " and student_id='"+_id+"'";
        }
        const data = await this.userRepository
            .query('select student_id, name, email, major_id, created_at, updated_at from student where 1=1 and token is not NULL' + _ext);
        console.log(JSON.stringify(data[0]));
        if(JSON.stringify(data[0])==undefined || JSON.stringify(data[0])==""){
            throw new UnauthorizedException();
        }

        return {
            "statusCode": 200,
            "message": "success",
            data:data[0]
        };
    }

    create(createUserDto: CreateUserDto) {
      return 'This action adds a new user';
    }
  
    findAll() {
      return `This action returns all user`;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} user`;
    }
  
    update(id: number, updateUserDto: UpdateUserDto) {
      return `This action updates a #${id} user`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} user`;
    }
}
