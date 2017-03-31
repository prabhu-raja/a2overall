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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var PocService = (function () {
    function PocService(http) {
        this.http = http;
        this.userUrl = 'https://reqres.in/api/users';
    }
    PocService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.userUrl)
            .map(function (res) { return res.json().data; })
            .map(function (resUser) { return resUser.map(_this.formatToFEUser); });
    };
    PocService.prototype.formatToFEUser = function (objUser) {
        return {
            avatar: objUser.avatar,
            displayName: objUser.last_name + "," + objUser.first_name + " ",
            firstName: objUser.first_name,
            id: objUser.id,
            lastName: objUser.last_name
        };
    };
    PocService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PocService);
    return PocService;
}());
exports.PocService = PocService;
//# sourceMappingURL=poc.service.js.map