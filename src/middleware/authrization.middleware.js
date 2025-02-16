

const isAuthorized = (...roles)=>{

    return (req ,res , next)=>{
        if(!roles.includes(req.user.role)){
            return next(new Error("You Are Not Authorized"))
        }
        return next()
    }
}

export default isAuthorized