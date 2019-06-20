"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const debug_1 = require("debug");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});
sequelize
    .authenticate()
    .then(() => {
    debug_1.default('Connection has been established successfully.');
})
    .catch(err => {
    debug_1.default('Unable to connect to the database:', err);
});
exports.default = sequelize;
