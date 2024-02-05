// const express = require('express')
// const router = express.Router()

// router.post('/',(req,res)=>
// {
//     const{name} = req.body
//     console.log(name)
//     if(name){
//         return res.status(200).send(`Welcome ${name}`)
//     }else{
//         res.send('Please enter the name ')    
//     }
// })

// module.exports = router

const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

module.exports = router
