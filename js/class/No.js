"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var No = /** @class */ (function () {
    function No(item) {
        this.item = item;
        this.filhoDir = null;
        this.filhoEsq = null;
        this.incE = 1;
        this.incD = 1;
    }
    No.prototype.getItem = function () {
        return this.item;
    };
    No.prototype.setItem = function (item) {
        this.item = item;
    };
    No.prototype.getFilhoEsq = function () {
        return this.filhoEsq;
    };
    No.prototype.getFilhoDir = function () {
        return this.filhoDir;
    };
    No.prototype.setFilhoEsq = function (no) {
        this.filhoEsq = no;
    };
    No.prototype.setFilhoDir = function (no) {
        this.filhoDir = no;
    };
    No.prototype.getIncE = function () {
        return this.incE;
    };
    No.prototype.getIncD = function () {
        return this.incD;
    };
    No.prototype.setIncE = function (value) {
        this.incE = value;
    };
    No.prototype.setIncD = function (value) {
        this.incD = value;
    };
    return No;
}());
exports.No = No;
