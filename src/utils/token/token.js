import jwt from 'jsonwebtoken';
export const generateToken = ({payload , secretKey = process.env.TOKEN_KEY}) => {
    return jwt.sign(payload , secretKey)
}
export const verifyToken = ({token , secretKey =process.env.TOKEN_KEY })=>{
    return jwt.verify(token , secretKey)
}