"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addRequestId(req, res, next) {
    req.requestId = broofa();
    return next();
}
exports.default = addRequestId;
function broofa() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
