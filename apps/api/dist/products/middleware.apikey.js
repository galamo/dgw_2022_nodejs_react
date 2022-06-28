"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateApiKey(req, res, next) {
    if (req.query.apiKey === process.env.API_KEY) {
        next();
    }
    else {
        return res.status(401).json({ message: "Api key is invalid / Please provide api Key: ?apiKey=<YOUR_API_KEY>" });
    }
}
exports.default = validateApiKey;
