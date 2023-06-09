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
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "user_id" }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_name",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_phone",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], User.prototype, "userPhone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_email",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], User.prototype, "userEmail", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_pass",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], User.prototype, "userPass", void 0);
User = __decorate([
    (0, typeorm_1.Index)("user_pkey", ["userId"], { unique: true }),
    (0, typeorm_1.Entity)("user", { schema: "public" })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map