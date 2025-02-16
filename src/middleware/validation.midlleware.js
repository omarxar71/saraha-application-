import Joi from "joi"
export const generalFields = {
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

}




export const validation = (schema) => {
    return (req, res, next) => {
        const data = { ...req.body, ...req.params, ...req.query }; // Fixed typo
        const results = schema.validate(data, { abortEarly: false });

        if (results.error) {
            const messageList = results.error.details.map((obj) => obj.message);
            console.error(messageList); 
            return next(new Error(messageList , {cause : 400})); // Properly passing the error to next()
        }

        return next(); // Ensuring next() is called when validation passes
    };
};
