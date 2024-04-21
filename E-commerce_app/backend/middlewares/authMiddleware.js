import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';
// PROTECTED ROUTES TOKEN base
export const requireSignIn = async (req,res,next) => {    // middleware means when req  GET  then next will be validate then response will be send ;; if next not written then execution will be pause andprevious code will show and will not move fw to next code
    try {
    const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET); ///token resides in headers
    req.user = decode;        // encrypt to decrypt conversion ==> decoding
    next();
    } catch (error) {
        console.log(error);
    }     
};

//admin access
export const isAdmin = async (req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message:"Unauthorized Access"
            }); 
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in admin middleware",
        });
    }
};