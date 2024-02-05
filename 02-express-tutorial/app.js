const express = require('express')
const app = express()

const auth = require('./routes/auth')
let { people } = require('./data')
app.use(express.urlencoded({ extended: false }))

app.use('/login',auth)
// ra
app.use([express.static('./methods-public')])

app.get('/login',(req,res)=>{
    res.send('It is not entering the model')
})


app.listen(5800,()=>
{
    console.log('the port 5800 is called')
})



// app.use([express.static('./methods-public'), express.urlencoded({extended:false})])

// let {people} = require('./data')
// app.get('/api/people',(req,res)=>
// {
//     res.status(200).json({sucess:true,data:people})
// })


// app.post('/api/people',(req,res)=>
// {
//     const {name} = req.body

//     console.log(name)
//     if(name){
//         res.status(201).json({success:true, person:name})
//     }
//     if(!name)
//     {
//         res.status(400).json({sucess:false, msg:"No name is provided "})
//     }
// })




// app.post('api/postman/people',(req,res)=>{

//     const {name} = req.body
//     console.log(name)
//     if(name){
//         res.status(201).json({success:true, person:name})
//     }
//     if(!name)
//     {
//         res.status(400).json({sucess:false, msg:"The operation is unsucessful"})
//     }
// })











// app.post('/login',(req,res)=>
// {
//     const{name} = req.body
//     if(name){
//         return res.status(200).send(`Welcome ${name}`)
//     }
//     else{
//         res.send('Please enter the name ')    
//     }
// })