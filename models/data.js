// models/data.js
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const ExpenseDetails = sequelize.define('expense_details', {
    // Define your fields here
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
      },
        expense_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      }
  }, {
    timestamps: false, // Disable automatic timestamps
});
module.exports = ExpenseDetails;

