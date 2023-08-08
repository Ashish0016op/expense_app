const express = require('express');
const app = express();
const path=require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const ExpenseDetails = require('./models/data');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.post('/expense_details', async (req, res) => {
  try {
    console.log(req.body);
    const expenseAmount=req.body.expense_amount;
    const description=req.body.description;
    const category=req.body.category;
    const newExpenseAmount=await ExpenseDetails.create({
        expense_amount:expenseAmount,
        description:description,
        category:category
    })
    res.status(200).json({newExpense:newExpenseAmount});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.get('/get_details',async(req,res,next)=>{
    try{
        const usersExpense=await ExpenseDetails.findAll();
        res.status(200).json({allExpense:usersExpense})
    }catch(error){
        console.log(error);
    }
})
app.delete('/delete_expense/:id', async(req,res,next)=>{
    const uId=req.params.id;
    await ExpenseDetails.destroy({where:{id:uId}});
    res.sendStatus(200);
})
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

sequelize
  .sync()
  .then(() => {
    console.log('Data sync successful');
    app.listen(5500);
  })
  .catch((err) => {
    console.log(err);
  });
