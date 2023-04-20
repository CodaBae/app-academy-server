const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize');


const User = sequelize.define('Users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

// Synchronize the model with the database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

module.exports = User;
