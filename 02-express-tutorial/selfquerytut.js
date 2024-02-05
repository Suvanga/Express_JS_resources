const express = require('express');
const app = express()
const {products} = require('./data')
app.get('/',(req,res)=>
{
    
    res.send(`<h1>This is a home page</h1><a href="/api/products"/> products</a>`)

})
app.get('/api/products/:productID',(req,res)=>{
    // const newProducts = products.map((productsa)=>{
    //     const {name, id, image} = productsa
    //     return {id,name,image}
const {productID} = req.params
    const Single_Product = products.find((product)=>product.id===Number(productID))
    
    console.log(Number(productID))
    // })
    // res.json(newProducts)
    
    if(!Single_Product){
        return res.status(404).send('OOPS! The product does not exist')
    }
    res.json(Single_Product)
})

app.get('/app/produxts/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    return res.send('nothing')

})

app.get('/api/v1/query',(req,res)=>
{
 
    const {search,limit} = req.query
    let sortedProducts= [...products]
    
    
    if(search){
        sortedProducts = sortedProducts.filter((products)=>{
            return products.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts= sortedProducts.slice(0,Number(limit))
        }
        if(sortedProducts.length<1){
            res.status(200).json({sucess:true,data:[]})
        }
res.status(200).send(sortedProducts)
})

app.listen(5800,()=>
{
    console.log('server is listening on port 5800')
})