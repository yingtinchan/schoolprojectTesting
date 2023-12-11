import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entitly/user.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async delMajor(_major_id){
    var _table="major";

    var data = await this.usersRepository.query("delete from "+_table+" where major_id='"+_major_id+"' ");

    return {
      "statusCode": 200,
      "message": "success"
    };
  }

  async addMajor(_name, _major_id){
    var _table="major";

    var data = await this.usersRepository.query("insert into "+_table+"  select '"+_major_id+"', '"+_name+"', curdate(), curdate() ");

    return {
      "statusCode": 200,
      "message": "success"
    };
  }

  async addUser(_type, _id, _name, _password, _email, _major_id){
    //type=S,T,A? 
    var _table="";
    var _ext="";
    if(_type=="admin"){
      _table="admin";
    }else if(_type=="student"){
        _table="student";
        _ext=",'"+_major_id+"'";
    }else if(_type=="teacher"){
      _table="teacher";
    }

    var _tmpJObject={'type':_type, 'id':_id, 'name':_name, 'password':_password, 'email':_email, 'major_id':_major_id};
    var data = await this.usersRepository.query("insert into "+_table+"  select '"+_id+"', '"+_name+"', '"+_password+"', '"+_email+"'"+_ext+", curdate(), curdate(), NULL ");
 
    return {
      "statusCode": 200,
      "message": "success"
    };
  }
  
  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}

