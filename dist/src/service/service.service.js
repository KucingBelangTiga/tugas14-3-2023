"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService6 = exports.ServiceService5 = exports.ServiceService4 = exports.ServiceService3 = exports.ServiceService2 = exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Countries_1 = require("../../output/entities/Countries");
const Departments_1 = require("../../output/entities/Departments");
const Employees_1 = require("../../output/entities/Employees");
const Jobs_1 = require("../../output/entities/Jobs");
const Locations_1 = require("../../output/entities/Locations");
const Regions_1 = require("../../output/entities/Regions");
const typeorm_2 = require("typeorm");
let ServiceService = class ServiceService {
    constructor(serviceRepo) {
        this.serviceRepo = serviceRepo;
    }
    async findAll() {
        return await this.serviceRepo.find();
    }
    async findOne(id) {
        return await this.serviceRepo.findOne({ where: { regionId: id } });
    }
    async Create(name) {
        try {
            const region = await this.serviceRepo.save({
                regionName: name,
            });
            return region;
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(id, name) {
        try {
            const region = await this.serviceRepo.update(id, {
                regionName: name,
            });
            return region;
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(id) {
        try {
            const region = await this.serviceRepo.delete(id);
            return region;
        }
        catch (error) {
            return error.message;
        }
    }
};
ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Regions_1.Regions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiceService);
exports.ServiceService = ServiceService;
let ServiceService2 = class ServiceService2 {
    constructor(serviceRepo2) {
        this.serviceRepo2 = serviceRepo2;
    }
    async findAll() {
        return await this.serviceRepo2.find();
    }
    async findOne(id) {
        return await this.serviceRepo2.findOne({ where: { countryId: id } });
    }
    async Create(name) {
        try {
            const country = await this.serviceRepo2.save({
                countryName: name,
            });
            return country;
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(id, name) {
        try {
            const country = await this.serviceRepo2.update(id, {
                countryName: name,
            });
            return country;
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(id) {
        try {
            const country = await this.serviceRepo2.delete(id);
            return country;
        }
        catch (error) {
            return error.message;
        }
    }
};
ServiceService2 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Countries_1.Countries)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiceService2);
exports.ServiceService2 = ServiceService2;
let ServiceService3 = class ServiceService3 {
    constructor(serviceRepo3) {
        this.serviceRepo3 = serviceRepo3;
    }
    async findAll() {
        return await this.serviceRepo3.find();
    }
    async findOne(id) {
        return await this.serviceRepo3.findOne({ where: { departmentId: id } });
    }
    async Create(name, managerid, locid) {
        try {
            const department = await this.serviceRepo3.save({
                departmentName: name,
                managerId: managerid,
                locationId: locid,
            });
            return department;
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(id, name) {
        try {
            const department = await this.serviceRepo3.update(id, {
                departmentName: name,
            });
            return department;
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(id) {
        try {
            const department = await this.serviceRepo3.delete(id);
            return department;
        }
        catch (error) {
            return error.message;
        }
    }
};
ServiceService3 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Departments_1.Departments)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiceService3);
exports.ServiceService3 = ServiceService3;
let ServiceService4 = class ServiceService4 {
    constructor(serviceRepo4) {
        this.serviceRepo4 = serviceRepo4;
    }
    async findAll() {
        return await this.serviceRepo4.find();
    }
    async findOne(id) {
        return await this.serviceRepo4.findOne({ where: { employeeId: id } });
    }
    async Create(name, lname, email, phone_number, hire_date, salary, job_id, manager_id, department_id) {
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
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(id, name) {
        try {
            const employee = await this.serviceRepo4.update(id, {
                firstName: name,
            });
            return employee;
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(id) {
        try {
            const employee = await this.serviceRepo4.delete(id);
            return employee;
        }
        catch (error) {
            return error.message;
        }
    }
};
ServiceService4 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Employees_1.Employees)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiceService4);
exports.ServiceService4 = ServiceService4;
let ServiceService5 = class ServiceService5 {
    constructor(serviceRepo5) {
        this.serviceRepo5 = serviceRepo5;
    }
    async findAll() {
        return await this.serviceRepo5.find();
    }
    async findOne(id) {
        return await this.serviceRepo5.findOne({ where: { jobId: id } });
    }
    async Update(id, name) {
        try {
            const job = await this.serviceRepo5.update(id, {
                jobTitle: name,
            });
            return job;
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(id) {
        try {
            const job = await this.serviceRepo5.delete(id);
            return job;
        }
        catch (error) {
            return error.message;
        }
    }
};
ServiceService5 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Jobs_1.Jobs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiceService5);
exports.ServiceService5 = ServiceService5;
let ServiceService6 = class ServiceService6 {
    constructor(serviceRepo6) {
        this.serviceRepo6 = serviceRepo6;
    }
    async findAll() {
        return await this.serviceRepo6.find();
    }
    async findOne(id) {
        return await this.serviceRepo6.findOne({ where: { locationId: id } });
    }
    async Create(name, postal, city, state, countryid) {
        try {
            const location = await this.serviceRepo6.save({
                streetAddress: name,
                postalCode: postal,
                city: city,
                stateProvince: state,
                countryId: countryid,
            });
            return location;
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(id, name) {
        try {
            const location = await this.serviceRepo6.update(id, {
                streetAddress: name,
            });
            return location;
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(id) {
        try {
            const location = await this.serviceRepo6.delete(id);
            return location;
        }
        catch (error) {
            return error.message;
        }
    }
};
ServiceService6 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Locations_1.Locations)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiceService6);
exports.ServiceService6 = ServiceService6;
//# sourceMappingURL=service.service.js.map