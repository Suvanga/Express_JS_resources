const express = require('express')
const app = express()
const morgan = require('morgan')
//req=> middleware=>res basic understanding is that the middleware as the name suggest sis the thing that stands between requesst and response 

const logger = require('./logger')
const authorize = require("./authorize")


app.use([morgan('tiny')])
app.use(express.static('./public'))
app.get('/about',(req,res)=>{
    res.send('bacoajbcsojb')
    })

app.get('/', (req,res)=>
{
    res.send('HOME')
})

app.get('/api/check', (req,res)=>
{
    res.send('HOME')
})
app.get('/api/home', (req,res)=>
{
    res.send('HOME')
})
app.get('/api/items', (req,res)=>
{
    console.log(req.user)
    res.send('info')
})


app.listen(5800,()=>
{
    console.log('the port 5800 is called')
})
