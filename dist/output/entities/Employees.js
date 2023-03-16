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
var Employees_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
const typeorm_1 = require("typeorm");
const Departments_1 = require("./Departments");
const Jobs_1 = require("./Jobs");
const JobHistory_1 = require("./JobHistory");
let Employees = Employees_1 = class Employees {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "employee_id" }),
    __metadata("design:type", Number)
], Employees.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "first_name",
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Employees.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "last_name",
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Employees.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", nullable: true, length: 8 }),
    __metadata("design:type", String)
], Employees.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "phone_number",
        nullable: true,
        length: 18,
    }),
    __metadata("design:type", String)
], Employees.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "hire_date", nullable: true }),
    __metadata("design:type", String)
], Employees.prototype, "hireDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "salary", nullable: true, precision: 7, scale: 2 }),
    __metadata("design:type", String)
], Employees.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Departments_1.Departments, (departments) => departments.manager),
    __metadata("design:type", Array)
], Employees.prototype, "departments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_1.Departments, (departments) => departments.employees, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "departmentId" }]),
    __metadata("design:type", Departments_1.Departments)
], Employees.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Jobs_1.Jobs, (jobs) => jobs.employees, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "job_id", referencedColumnName: "jobId" }]),
    __metadata("design:type", Jobs_1.Jobs)
], Employees.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employees_1, (employees) => employees.employees, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "manager_id", referencedColumnName: "employeeId" }]),
    __metadata("design:type", Employees)
], Employees.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Employees_1, (employees) => employees.manager),
    __metadata("design:type", Array)
], Employees.prototype, "employees", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => JobHistory_1.JobHistory, (jobHistory) => jobHistory.employee),
    __metadata("design:type", Array)
], Employees.prototype, "jobHistories", void 0);
Employees = Employees_1 = __decorate([
    (0, typeorm_1.Index)("employees_pkey", ["employeeId"], { unique: true }),
    (0, typeorm_1.Entity)("employees", { schema: "public" })
], Employees);
exports.Employees = Employees;
//# sourceMappingURL=Employees.js.map