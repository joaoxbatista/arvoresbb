"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(item) {
        this.chave = item.chave;
    }
    Item.prototype.getChave = function () {
        return this.chave;
    };
    Item.prototype.setChave = function (value) {
        this.chave = value;
    };
    Item.prototype.compare = function (item) {
        if (this.chave < item.chave) {
            return -1;
        }
        else if (this.chave > item.chave) {
            return 1;
        }
    };
    return Item;
}());
exports.Item = Item;
