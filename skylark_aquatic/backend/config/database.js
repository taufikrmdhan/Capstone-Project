import { Sequelize } from "sequelize";

const db = new Sequelize('taufik', 'taufik', '', {
    host: "6.6.0.1",
    port: 9999,
    dialect: "mysql"
});

export default db;