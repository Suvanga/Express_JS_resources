const authorize = (req,res,next)=>
{
    const {user} = req.query
    console.log(user)

    if(user==='Suvanga'){
        req.user = {name:'Suvanga',id:2}
        next()
    }else{
        res.status(404).send("Unauthorized")
    }
    
    console.log("we enter authorizq")
    

}

module.exports = authorize
