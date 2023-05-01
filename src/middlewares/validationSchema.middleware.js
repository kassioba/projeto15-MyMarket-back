export function validateSchema(schema) {
    console.log("passou Schema")
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            return res.status(422).send(errors);
        }
console.log("passou Schema")
        next();
    }
}