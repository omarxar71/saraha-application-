

import Joi from "joi"
//register schema
    //function for the Dynamic schema from validation middleware file 
    //pass the schema to the validation middle ware
    export const register  = Joi.object({
        email: Joi.string()
            .email() // Validates email format
            .optional(), 
    
        password: Joi.string()
            .min(6) // Minimum password length
            .optional(),
    
        userName: Joi.string()
            .min(3)
            .max(30)
            .optional(),
    
        phoneNumber: Joi.string() // Ensures phone number has 10-15 digits
            .optional(),
    
        gender: Joi.string()
            .valid("Male", "Female", "Other") // Restricts gender values
            .optional(),
    

    });
    




//login schema