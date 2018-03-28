const express=require('express');

const router=express.Router();

//get reqst handle
router.get('/ninjas',function(req,res){
    console.log(router);
    
    res.send({type:"GET"});
});


//post reqst handle
router.post('/ninjas',function(req,res){
    res.send({type:"POST"});
});


//update reqst handle
router.put('/ninjas/:id',function(req,res){
    res.send({type:"PUT"});
});

//delete reqst handle
router.delete('/ninjas/:id',function(req,res){
    res.send({type:"DELETE"});
});


module.exports=router;