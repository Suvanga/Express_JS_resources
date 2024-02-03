const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    
    res.json([{name:'john'},{name:'Susan'}])
})
app.listen(5800,()=>{
    console.log('server is listening on port 5000')
})