import { ServiceService, ServiceService2, ServiceService3, ServiceService4, ServiceService5, ServiceService6 } from 'src/service/service.service';
export declare class ControllerController {
    private Services;
    constructor(Services: ServiceService);
    getAll(): Promise<import("../../output/entities/Regions").Regions[]>;
    getOne(id: number): Promise<import("../../output/entities/Regions").Regions>;
    Create(name: string): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
export declare class ControllerController2 {
    private Services;
    constructor(Services: ServiceService2);
    getAll(): Promise<import("../../output/entities/Countries").Countries[]>;
    getOne(id: string): Promise<import("../../output/entities/Countries").Countries>;
    Create(name: string): Promise<any>;
    Update(id: string, name: string): Promise<any>;
    Delete(id: string): Promise<any>;
}
export declare class ControllerController3 {
    private Services;
    constructor(Services: ServiceService3);
    getAll(): Promise<import("../../output/entities/Departments").Departments[]>;
    getOne(id: number): Promise<import("../../output/entities/Departments").Departments>;
    Create(name: string, managerid: number, locid: number): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
export declare class ControllerController4 {
    private Services;
    constructor(Services: ServiceService4);
    getAll(): Promise<import("../../output/entities/Employees").Employees[]>;
    getOne(id: number): Promise<import("../../output/entities/Employees").Employees>;
    Create(name: string, lname: string, email: string, phone_number: string, hire_date: string, salary: string, job_id: string, manager_id: number, department_id: number): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
export declare class ControllerController5 {
    private Services;
    constructor(Services: ServiceService5);
    getAll(): Promise<import("../../output/entities/Jobs").Jobs[]>;
    getOne(id: string): Promise<import("../../output/entities/Jobs").Jobs>;
    Update(id: string, name: string): Promise<any>;
    Delete(id: string): Promise<any>;
}
export declare class ControllerController6 {
    private Services;
    constructor(Services: ServiceService6);
    getAll(): Promise<import("../../output/entities/Locations").Locations[]>;
    getOne(id: number): Promise<import("../../output/entities/Locations").Locations>;
    Create(name: string, postal: string, city: string, state: string, countryid: string): Promise<any>;
    Update(id: number, name: string): Promise<any>;
    Delete(id: number): Promise<any>;
}
