const express=require('express');
const routes=require('./routes/api');

const app=express();


app.use('/api',routes);



app.listen(process.env.port||3000,function () {
    console.log("listeing on port 3000");
    
});