

//login user
export const loginUser = async (req,res) =>{
    try{
        res.status(200).json({mssg:"login user"})
    }catch(error){
        res.status(400).json({mssg:'Somthing went wrong with login!'})
    }
}



//signup user
export const signupUser = async(req,res) =>{
    try{
        res.status(200).json({mssg:'signup user'})
    }catch(error){
        res.status(400).json({mssg:'Somthing went wrong with singing up!'})
    }
}

