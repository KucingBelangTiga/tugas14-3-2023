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
exports.Regions1 = void 0;
const typeorm_1 = require("typeorm");
let Regions1 = class Regions1 {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "region_id" }),
    __metadata("design:type", Number)
], Regions1.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "region_name",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Regions1.prototype, "regionName", void 0);
Regions1 = __decorate([
    (0, typeorm_1.Index)("region_pk", ["regionId"], { unique: true }),
    (0, typeorm_1.Entity)("regions1", { schema: "public" })
], Regions1);
exports.Regions1 = Regions1;
//# sourceMappingURL=Regions1.js.map