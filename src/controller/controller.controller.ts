import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServiceService, ServiceService2, ServiceService3, ServiceService4, ServiceService5, ServiceService6 } from 'src/service/service.service';

@Controller('/region')
export class ControllerController {
  constructor(private Services: ServiceService) { }

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async Create(@Body('name') name: string) {
    return await this.Services.Create(name);
  }
  @Put(':id')
  public async Update(@Param('id') id: number, @Body('name') name: string) {
    return await this.Services.Update(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}

@Controller('/country')
export class ControllerController2 {
  constructor(private Services: ServiceService2) { }

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async Create(@Body('name') name: string) {
    return await this.Services.Create(name);
  }
  @Put(':id')
  public async Update(@Param('id') id: string, @Body('name') name: string) {
    return await this.Services.Update(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: string) {
    return await this.Services.Delete(id);
  }
}

@Controller('/department')
export class ControllerController3 {
  constructor(private Services: ServiceService3) { }

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async Create(@Body('name') name: string, @Body('managerid') managerid: number, @Body('locid') locid: number) {
    return await this.Services.Create(name, managerid, locid);
  }
  @Put(':id')
  public async Update(@Param('id') id: number, @Body('name') name: string) {
    return await this.Services.Update(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}

@Controller('/employee')
export class ControllerController4 {
  constructor(private Services: ServiceService4) { }

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async Create(@Body('name') name: string, @Body('lname') lname: string, @Body('email') email: string, @Body('phone_number') phone_number: string, @Body('hire_date') hire_date: string, @Body('salary') salary: string, @Body('job_id') job_id: string, @Body('manager_id') manager_id: number, @Body('department_id') department_id: number) {
    return await this.Services.Create(name, lname, email, phone_number, hire_date, salary, job_id, manager_id, department_id);
  }
  @Put(':id')
  public async Update(@Param('id') id: number, @Body('name') name: string) {
    return await this.Services.Update(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}

@Controller('/job')
export class ControllerController5 {
  constructor(private Services: ServiceService5) { }

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.Services.findOne(id);
  }
  // @Post()
  // public async Create(@Body('name') job_title: string, @Body('minsalary') minsalary: number, @Body('maxsalary') maxsalary: number) {
  //   return await this.Services.Create(job_title, minsalary, maxsalary);
  // }
  @Put(':id')
  public async Update(@Param('id') id: string, @Body('name') name: string) {
    return await this.Services.Update(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: string) {
    return await this.Services.Delete(id);
  }
}

@Controller('/location')
export class ControllerController6 {
  constructor(private Services: ServiceService6) { }

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async Create(@Body('name') name: string, @Body('postal') postal: string, @Body('city') city: string, @Body('state') state: string, @Body('countryid') countryid: string) {
    return await this.Services.Create(name, postal, city, state, countryid);
  }
  @Put(':id')
  public async Update(@Param('id') id: number, @Body('name') name: string) {
    return await this.Services.Update(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
