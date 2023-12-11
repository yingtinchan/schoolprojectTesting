import { Controller, Get, Header, Post , Req, Param, Body, UnauthorizedException, Patch, Delete} from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
var jwt = require('jsonwebtoken');
import config from '../config/config.json';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/delMajor')
  delMajor(@Body() body: any, @Req() req){
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.userType);
      if(decoded.userType!="admin"){
        throw new UnauthorizedException();
      }
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.adminService.delMajor(body.major_id);
  }

  @Post('/addMajor')
  addMajor(@Body() body: any, @Req() req){
    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.userType);
      if(decoded.userType!="admin"){
        throw new UnauthorizedException();
      }
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.adminService.addMajor(body.name,body.major_id);
  }

  @Post('/addUser')
  addUser(@Body() body: any, @Req() req){

    jwt.verify(req.headers.authorization, config.SECRET_KEY, function(err, decoded) {
      console.log(decoded.userType);
      if(decoded.userType!="admin"){
        throw new UnauthorizedException();
      }
    });

    console.log("req="+req.headers.authorization);
    console.log('body='+JSON.stringify(body));
    return this.adminService.addUser(body.type,body.id,body.name,body.password,body.email,body.major_id);
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
