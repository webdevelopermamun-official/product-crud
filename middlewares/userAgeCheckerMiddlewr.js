export const ageChack = (req, res, next) =>{
    const {name, age} = req.body;
    if(age >= 21){
        next();
    }else{
        res.status(403).json({message: "You are not old enough to vote"});
    }
}