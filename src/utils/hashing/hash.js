import bcrypt  from 'bcrypt';
export const hashing = ({plainText , rounds = Number(process.env.ROUNDS)})=>{
    return bcrypt.hashSync(plainText, rounds);
}


export const compareHash = ({plainText , hashed})=>{
    return bcrypt.compareSync(plainText , hashed);
}