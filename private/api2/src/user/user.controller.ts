import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
var jwt = require('jsonwebtoken');
import config from '../config/config.json';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/getAdmins')
  getAdmins(@Body() body: any, @Req() req){
    var id="";
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.id);
      id=decoded.id;
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.userService.getAdmins(id);
  }

  @Post('/getTeachers')
  getTeachers(@Body() body: any, @Req() req){
    var id="";
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.id);
      id=decoded.id;
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.userService.getTeachers(id);
  }

  @Post('/getStudents')
  getStudents(@Body() body: any, @Req() req){
    var id="";
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.id);
      id=decoded.id;
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.userService.getStudents(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
