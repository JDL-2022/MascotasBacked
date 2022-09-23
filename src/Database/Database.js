import  Sequelize  from "sequelize";

const sequelize = new Sequelize('mascotas', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});

export {
  sequelize
}