const logger = (req,res,next)=>{
    const method = req.method 
    // const time = new Date().getFullYear()
    const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
    console.log(min)
//     if(min>19){
//         res.send('The page is no longer available')
//     }else{
       
//     // }



    next()
// }
}
module.exports= logger