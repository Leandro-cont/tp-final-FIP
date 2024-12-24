"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.generateUniqueId = function (existingIds) {
        var id;
        do {
            id = Math.floor(Math.random() * 10000).toString();
        } while (existingIds.has(id));
        existingIds.add(id);
        return id;
    };
    return Utils;
}());
exports.Utils = Utils;
