import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
var jwt = require('jsonwebtoken');
import config from '../config/config.json';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  login(@Body() body: any, @Req() req){
    console.log('body='+JSON.stringify(body));
    return this.loginService.login(body.id, body.password);
  }
  @Post('/logout')
  logout(@Body() body: any, @Req() req){
    var _type="";
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.name);
      _type=decoded.userType;
    });

    return this.loginService.logout(req.headers.authorization, _type);
  }
  
  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
