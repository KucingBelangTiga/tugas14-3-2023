import { Countries } from 'output/entities/Countries';
import { Departments } from 'output/entities/Departments';
import { Employees } from 'output/entities/Employees';
import { Jobs } from 'output/entities/Jobs';
import { Locations } from 'output/entities/Locations';
import { Regions } from 'output/entities/Regions';
import { Repository } from 'typeorm';
export declare class ServiceService {
    private serviceRepo;
    constructor(serviceRepo: Repository<Regions>);
    findAll(): Promise<Regions[]>;
    findOne(id: number): Promise<Regions>;
    Create(name: string): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
export declare class ServiceService2 {
    private serviceRepo2;
    constructor(serviceRepo2: Repository<Countries>);
    findAll(): Promise<Countries[]>;
    findOne(id: string): Promise<Countries>;
    Create(name: string): Promise<any>;
    Update(id: string, name: string): Promise<any>;
    Delete(id: string): Promise<any>;
}
export declare class ServiceService3 {
    private serviceRepo3;
    constructor(serviceRepo3: Repository<Departments>);
    findAll(): Promise<Departments[]>;
    findOne(id: number): Promise<Departments>;
    Create(name: string, managerid: number, locid: number): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
export declare class ServiceService4 {
    private serviceRepo4;
    constructor(serviceRepo4: Repository<Employees>);
    findAll(): Promise<Employees[]>;
    findOne(id: number): Promise<Employees>;
    Create(name: string, lname: string, email: string, phone_number: string, hire_date: string, salary: string, job_id: string, manager_id: number, department_id: number): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
export declare class ServiceService5 {
    private serviceRepo5;
    constructor(serviceRepo5: Repository<Jobs>);
    findAll(): Promise<Jobs[]>;
    findOne(id: string): Promise<Jobs>;
    Update(id: string, name: string): Promise<any>;
    Delete(id: string): Promise<any>;
}
export declare class ServiceService6 {
    private serviceRepo6;
    constructor(serviceRepo6: Repository<Locations>);
    findAll(): Promise<Locations[]>;
    findOne(id: number): Promise<Locations>;
    Create(name: string, postal: string, city: string, state: string, countryid: string): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
