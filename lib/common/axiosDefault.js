"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var auth_1 = require("../requests/auth");
var baseURL = process.env.NODE_ENV === 'development' ? 'https://api-dev.joinsy.com.br' : 'https://api.joinsy.com.br';
var instance = axios_1.default.create({
    baseURL: baseURL,
});
if (auth_1.AuthRequest === null || auth_1.AuthRequest === void 0 ? void 0 : auth_1.AuthRequest.authAccessToken)
    instance.defaults.headers.common = { Authorization: "bearer ".concat(auth_1.AuthRequest.authAccessToken) };
exports.default = instance;
