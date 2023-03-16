"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Countries_1 = require("../../output/entities/Countries");
const Departments_1 = require("../../output/entities/Departments");
const Employees_1 = require("../../output/entities/Employees");
const JobHistory_1 = require("../../output/entities/JobHistory");
const Jobs_1 = require("../../output/entities/Jobs");
const Locations_1 = require("../../output/entities/Locations");
const Regions_1 = require("../../output/entities/Regions");
const Regions1_1 = require("../../output/entities/Regions1");
const controller_controller_1 = require("../controller/controller.controller");
const service_service_1 = require("../service/service.service");
let ModuleModule = class ModuleModule {
};
ModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Regions_1.Regions,
                Countries_1.Countries,
                Locations_1.Locations,
                Departments_1.Departments,
                Employees_1.Employees,
                JobHistory_1.JobHistory,
                Jobs_1.Jobs,
                Regions1_1.Regions1,
            ]),
        ],
        providers: [service_service_1.ServiceService, service_service_1.ServiceService2, service_service_1.ServiceService3, service_service_1.ServiceService4, service_service_1.ServiceService5, service_service_1.ServiceService6],
        controllers: [controller_controller_1.ControllerController, controller_controller_1.ControllerController2, controller_controller_1.ControllerController3, controller_controller_1.ControllerController4, controller_controller_1.ControllerController5, controller_controller_1.ControllerController6],
    })
], ModuleModule);
exports.ModuleModule = ModuleModule;
//# sourceMappingURL=module.module.js.map