"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.get('', (req, res) => {
    const html = fs_1.default.readFileSync('index.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});
app.get('/test', (req, res) => {
    res.send('hello word');
});
app.listen(3000);
