"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
// client/src/services/authService.ts
const axios_1 = __importDefault(require("axios"));
const API_URL = 'http://localhost:5000/api/auth';
const register = async (name, email, password) => {
    try {
        const response = await axios_1.default.post(`${API_URL}/register`, {
            name,
            email,
            password,
        });
        return response.data;
    }
    catch (error) {
        throw error.message;
    }
};
exports.register = register;
