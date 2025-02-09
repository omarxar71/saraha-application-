export const validation = (schema) => {
    return (req, res, next) => {
        const data = { ...req.body, ...req.params, ...req.query }; // Fixed typo
        const results = schema.validate(data, { abortEarly: false });

        if (results.error) {
            const messageList = results.error.details.map((obj) => obj.message);
            return next(new Error("messageList" , {cause : 400})); // Properly passing the error to next()
        }

        return next(); // Ensuring next() is called when validation passes
    };
};
