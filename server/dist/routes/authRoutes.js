"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const authRouters = (0, express_1.Router)();
authRouters.post('/register', authControllers_1.register);
exports.default = authRouters;
