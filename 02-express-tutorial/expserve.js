const express = require('express');
const app = express()
const path = require('path')
app.use(express.static('./public'))



// app.get('/',(req,res)=>{

// We wil use the other option to send file rather than using SendFile feature
// console.log('user gets the resource')
// res.status(200).sendFile(path.resolve(__dirname,'./index.html'))
// })

// app.get('/about',(req,res)=>{
//     res.send(`<h1>MOTHER FUCKING WORKS<h1>`)
//     console.log('user gets the resource')
//     })

// app.get('/info',(req,res)=>{
//     res.status(200).send('info page')
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>The resource is not yet found </h1>')
// })

app.listen(5800)


/*
app.get
app.post
app.put
app.delete
app.all
app.use
app.listen
*/
