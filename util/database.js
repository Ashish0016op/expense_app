const Sequelize=require('sequelize');
const sequelize = new Sequelize('expense-db','root','Ashish8298',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;