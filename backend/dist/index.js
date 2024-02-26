"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const sampleData = {
    "data": [
        {
            "name": "A",
            "description": "This is a description of A",
            "parent": ""
        },
        {
            "name": "B",
            "description": "This is a description of B",
            "parent": "A"
        },
        {
            "name": "C",
            "description": "This is a description of C",
            "parent": "A"
        },
        {
            "name": "D",
            "description": "This is a description of D",
            "parent": "A"
        },
        {
            "name": "B-1",
            "description": "This is a description of B-1",
            "parent": "B"
        },
        {
            "name": "B-2",
            "description": "This is a description of B-2",
            "parent": "B"
        },
        {
            "name": "B-3",
            "description": "This is a description of B-3",
            "parent": "B"
        }
    ]
};
app.get('/', (req, res) => {
    res.json(sampleData);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
