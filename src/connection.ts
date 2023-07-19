import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres', 'postgres', 'example', {
  host: 'db',
  port: 5432,
  dialect: 'postgres'
});

export default sequelize;