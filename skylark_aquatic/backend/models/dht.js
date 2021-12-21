import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Dht = db.define('dht11',{
    hum:{
        type: DataTypes.NUMBER
    },
    tempe:{
        type: DataTypes.NUMBER
    },
    date:{
        type: DataTypes.NUMBER
    }
},{
    freezeTableName: true
});

export default Dht;