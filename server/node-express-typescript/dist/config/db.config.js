"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialect = exports.config = void 0;
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
exports.config = {
    HOST: DB_HOST,
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    DB: "survey",
};
exports.dialect = "postgres";
