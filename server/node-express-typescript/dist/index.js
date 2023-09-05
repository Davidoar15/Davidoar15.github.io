"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server = require("./app");
const { conn } = require('./db/index');
conn.sync({ force: true })
    .then(() => {
    server.listen(3001, () => {
        console.log('⚡️[server]: Server is running at http://localhost:3001');
    });
})
    .catch((error) => {
    console.error('Error to sync Sequelize with Database', error);
});
