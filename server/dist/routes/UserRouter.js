"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users = require('../db').users;
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        res.send(Users);
    }
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.UserRouter = UserRouter;
const userRoutes = new UserRouter();
userRoutes.init();
exports.default = userRoutes.router;
