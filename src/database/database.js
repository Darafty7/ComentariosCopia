import Sequelize from "sequelize";
 export const sequelize = new Sequelize('sintapujosdb12','postgres','0000',{
    host: 'localhost',
    dialect: 'postgres',
    pool:{
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    //para que no muestre por consola las operaciones que realiza
    //logging: false

})