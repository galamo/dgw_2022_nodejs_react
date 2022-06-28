"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const products_1 = require("./products");
const requestId_1 = __importDefault(require("./middleware/requestId"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} : ${req.url}`);
    next();
});
app.use(requestId_1.default);
app.get("/healthcheck", (req, res) => {
    res.send(`Api is Up ${new Date().toISOString()}`);
});
app.use("/products", products_1.productsRouter);
app.use((error, req, res, next) => {
    console.log(error, req.requestId);
    res.status(500).send(`something went wrong ${req.requestId}`);
});
app.listen(process.env.PORT, () => {
    console.log(`Api is listening to: ${process.env.PORT}`);
});
