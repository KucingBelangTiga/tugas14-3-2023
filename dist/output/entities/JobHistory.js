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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobHistory = void 0;
const typeorm_1 = require("typeorm");
const Departments_1 = require("./Departments");
const Employees_1 = require("./Employees");
const Jobs_1 = require("./Jobs");
let JobHistory = class JobHistory {
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "employee_id" }),
    __metadata("design:type", Number)
], JobHistory.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { primary: true, name: "start_date" }),
    __metadata("design:type", String)
], JobHistory.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "end_date", nullable: true }),
    __metadata("design:type", String)
], JobHistory.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_1.Departments, (departments) => departments.jobHistories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "departmentId" }]),
    __metadata("design:type", Departments_1.Departments)
], JobHistory.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employees_1.Employees, (employees) => employees.jobHistories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "employee_id", referencedColumnName: "employeeId" }]),
    __metadata("design:type", Employees_1.Employees)
], JobHistory.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Jobs_1.Jobs, (jobs) => jobs.jobHistories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "job_id", referencedColumnName: "jobId" }]),
    __metadata("design:type", Jobs_1.Jobs)
], JobHistory.prototype, "job", void 0);
JobHistory = __decorate([
    (0, typeorm_1.Index)("employee_id_start_date_pk", ["employeeId", "startDate"], {
        unique: true,
    }),
    (0, typeorm_1.Entity)("job_history", { schema: "public" })
], JobHistory);
exports.JobHistory = JobHistory;
//# sourceMappingURL=JobHistory.js.map