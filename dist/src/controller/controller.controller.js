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
exports.ControllerController6 = exports.ControllerController5 = exports.ControllerController4 = exports.ControllerController3 = exports.ControllerController2 = exports.ControllerController = void 0;
const common_1 = require("@nestjs/common");
const service_service_1 = require("../service/service.service");
let ControllerController = class ControllerController {
    constructor(Services) {
        this.Services = Services;
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(name) {
        return await this.Services.Create(name);
    }
    async Update(id, name) {
        return await this.Services.Update(id, name);
    }
    async Delete(id) {
        return await this.Services.Delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControllerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ControllerController.prototype, "Create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ControllerController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController.prototype, "Delete", null);
ControllerController = __decorate([
    (0, common_1.Controller)('/region'),
    __metadata("design:paramtypes", [service_service_1.ServiceService])
], ControllerController);
exports.ControllerController = ControllerController;
let ControllerController2 = class ControllerController2 {
    constructor(Services) {
        this.Services = Services;
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(name) {
        return await this.Services.Create(name);
    }
    async Update(id, name) {
        return await this.Services.Update(id, name);
    }
    async Delete(id) {
        return await this.Services.Delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControllerController2.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ControllerController2.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ControllerController2.prototype, "Create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ControllerController2.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ControllerController2.prototype, "Delete", null);
ControllerController2 = __decorate([
    (0, common_1.Controller)('/country'),
    __metadata("design:paramtypes", [service_service_1.ServiceService2])
], ControllerController2);
exports.ControllerController2 = ControllerController2;
let ControllerController3 = class ControllerController3 {
    constructor(Services) {
        this.Services = Services;
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(name, managerid, locid) {
        return await this.Services.Create(name, managerid, locid);
    }
    async Update(id, name) {
        return await this.Services.Update(id, name);
    }
    async Delete(id) {
        return await this.Services.Delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControllerController3.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController3.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('managerid')),
    __param(2, (0, common_1.Body)('locid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ControllerController3.prototype, "Create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ControllerController3.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController3.prototype, "Delete", null);
ControllerController3 = __decorate([
    (0, common_1.Controller)('/department'),
    __metadata("design:paramtypes", [service_service_1.ServiceService3])
], ControllerController3);
exports.ControllerController3 = ControllerController3;
let ControllerController4 = class ControllerController4 {
    constructor(Services) {
        this.Services = Services;
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(name, lname, email, phone_number, hire_date, salary, job_id, manager_id, department_id) {
        return await this.Services.Create(name, lname, email, phone_number, hire_date, salary, job_id, manager_id, department_id);
    }
    async Update(id, name) {
        return await this.Services.Update(id, name);
    }
    async Delete(id) {
        return await this.Services.Delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControllerController4.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController4.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('lname')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('phone_number')),
    __param(4, (0, common_1.Body)('hire_date')),
    __param(5, (0, common_1.Body)('salary')),
    __param(6, (0, common_1.Body)('job_id')),
    __param(7, (0, common_1.Body)('manager_id')),
    __param(8, (0, common_1.Body)('department_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ControllerController4.prototype, "Create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ControllerController4.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController4.prototype, "Delete", null);
ControllerController4 = __decorate([
    (0, common_1.Controller)('/employee'),
    __metadata("design:paramtypes", [service_service_1.ServiceService4])
], ControllerController4);
exports.ControllerController4 = ControllerController4;
let ControllerController5 = class ControllerController5 {
    constructor(Services) {
        this.Services = Services;
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Update(id, name) {
        return await this.Services.Update(id, name);
    }
    async Delete(id) {
        return await this.Services.Delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControllerController5.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ControllerController5.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ControllerController5.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ControllerController5.prototype, "Delete", null);
ControllerController5 = __decorate([
    (0, common_1.Controller)('/job'),
    __metadata("design:paramtypes", [service_service_1.ServiceService5])
], ControllerController5);
exports.ControllerController5 = ControllerController5;
let ControllerController6 = class ControllerController6 {
    constructor(Services) {
        this.Services = Services;
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(name, postal, city, state, countryid) {
        return await this.Services.Create(name, postal, city, state, countryid);
    }
    async Update(id, name) {
        return await this.Services.Update(id, name);
    }
    async Delete(id) {
        return await this.Services.Delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControllerController6.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController6.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('postal')),
    __param(2, (0, common_1.Body)('city')),
    __param(3, (0, common_1.Body)('state')),
    __param(4, (0, common_1.Body)('countryid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ControllerController6.prototype, "Create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ControllerController6.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControllerController6.prototype, "Delete", null);
ControllerController6 = __decorate([
    (0, common_1.Controller)('/location'),
    __metadata("design:paramtypes", [service_service_1.ServiceService6])
], ControllerController6);
exports.ControllerController6 = ControllerController6;
//# sourceMappingURL=controller.controller.js.map