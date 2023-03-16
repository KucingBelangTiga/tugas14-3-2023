import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from 'output/entities/Countries';
import { Departments } from 'output/entities/Departments';
import { Employees } from 'output/entities/Employees';
import { Jobs } from 'output/entities/Jobs';
import { Locations } from 'output/entities/Locations';
import { Regions } from 'output/entities/Regions';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Regions) private serviceRepo: Repository<Regions>,
  ) { }

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({ where: { regionId: id } });
  }

  public async Create(name: string) {
    try {
      const region = await this.serviceRepo.save({
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string) {
    try {
      const region = await this.serviceRepo.update(id, {
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const region = await this.serviceRepo.delete(id);
      return region;
    } catch (error) {
      return error.message;
    }
  }
}

@Injectable()
export class ServiceService2 {
  constructor(
    @InjectRepository(Countries) private serviceRepo2: Repository<Countries>,
  ) { }

  public async findAll() {
    return await this.serviceRepo2.find();
  }

  public async findOne(id: string) {
    return await this.serviceRepo2.findOne({ where: { countryId: id } });
  }

  public async Create(name: string) {
    try {
      const country = await this.serviceRepo2.save({
        countryName: name,
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: string, name: string) {
    try {
      const country = await this.serviceRepo2.update(id, {
        countryName: name,
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const country = await this.serviceRepo2.delete(id);
      return country;
    } catch (error) {
      return error.message;
    }
  }
}

@Injectable()
export class ServiceService3 {
  constructor(
    @InjectRepository(Departments) private serviceRepo3: Repository<Departments>,
  ) { }

  public async findAll() {
    return await this.serviceRepo3.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo3.findOne({ where: { departmentId: id } });
  }

  public async Create(name: string, managerid: number, locid: number) {
    try {
      const department = await this.serviceRepo3.save({
        departmentName: name,
        managerId: managerid,
        locationId: locid,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string) {
    try {
      const department = await this.serviceRepo3.update(id, {
        departmentName: name,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const department = await this.serviceRepo3.delete(id);
      return department;
    } catch (error) {
      return error.message;
    }
  }
}

@Injectable()
export class ServiceService4 {
  constructor(
    @InjectRepository(Employees) private serviceRepo4: Repository<Employees>,
  ) { }

  public async findAll() {
    return await this.serviceRepo4.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo4.findOne({ where: { employeeId: id } });
  }

  public async Create(name: string, lname: string, email: string, phone_number: string, hire_date: string, salary: string, job_id: string, manager_id: number, department_id: number) {
    try {
      const employee = await this.serviceRepo4.save({
        firstName: name,
        lastName: lname,
        email: email,
        phoneNumber: phone_number,
        hireDate: hire_date,
        salary: salary,
        jobId: job_id,
        managerId: manager_id,
        departmentId: department_id,
      });
      return employee;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string) {
    try {
      const employee = await this.serviceRepo4.update(id, {
        firstName: name,
      });
      return employee;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const employee = await this.serviceRepo4.delete(id);
      return employee;
    } catch (error) {
      return error.message;
    }
  }
}

@Injectable()
export class ServiceService5 {
  constructor(
    @InjectRepository(Jobs) private serviceRepo5: Repository<Jobs>,
  ) { }

  public async findAll() {
    return await this.serviceRepo5.find();
  }

  public async findOne(id: string) {
    return await this.serviceRepo5.findOne({ where: { jobId: id } });
  }

  // public async Create(job_title: string, minsalary: number, maxsalary: number) {
  //   try {
  //     const job = await this.serviceRepo5.save({
  //       jobTitle: job_title,
  //       minSalary: minsalary,
  //       maxSalary: maxsalary,
  //     });
  //     return job;
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  public async Update(id: string, name: string) {
    try {
      const job = await this.serviceRepo5.update(id, {
        jobTitle: name,
      });
      return job;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const job = await this.serviceRepo5.delete(id);
      return job;
    } catch (error) {
      return error.message;
    }
  }
}

@Injectable()
export class ServiceService6 {
  constructor(
    @InjectRepository(Locations) private serviceRepo6: Repository<Locations>,
  ) { }

  public async findAll() {
    return await this.serviceRepo6.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo6.findOne({ where: { locationId: id } });
  }

  public async Create(name: string, postal: string, city: string, state: string, countryid: string) {
    try {
      const location = await this.serviceRepo6.save({
        streetAddress: name,
        postalCode: postal,
        city: city,
        stateProvince: state,
        countryId: countryid,
      });
      return location;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string) {
    try {
      const location = await this.serviceRepo6.update(id, {
        streetAddress: name,
      });
      return location;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const location = await this.serviceRepo6.delete(id);
      return location;
    } catch (error) {
      return error.message;
    }
  }
}
