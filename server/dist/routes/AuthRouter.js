"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users = require('../db.json').users;
class AuthRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    login(req, res, next) {
        const body = req.body;
        const requestedUser = users.find(user => user.email === body.email);
        res.send({
            success: true,
            data: requestedUser
        });
    }
    createUser(req, res, next) {
        res.send({
            message: 'creating user'
        });
    }
    init() {
        this.router.post('/login', this.login);
        this.router.put('/create', this.login);
    }
}
exports.AuthRouter = AuthRouter;
const authRoutes = new AuthRouter();
authRoutes.init();
exports.default = authRoutes.router;
