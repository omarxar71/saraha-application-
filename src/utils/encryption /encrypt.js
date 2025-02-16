
import  CryptoJS from 'crypto-js';
export const  encrypt =({plainText , secreteKey = process.env.SECRET_KEY})=>{
    return CryptoJS.AES.encrypt(plainText , secreteKey).toString();
}

export const decrypt =({encrypted , secreteKey =process.env.SECRET_KEY})=>{
    return CryptoJS.AES.decrypt(encrypted ,secreteKey).toString(CryptoJS.enc.Utf8)
}