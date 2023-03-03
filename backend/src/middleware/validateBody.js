/**
 * this middleware function validates a request body against a provided Joi schematic
 * @param {*} schema a Joi schematic to validate the request body with
 */
const validateBody = (schema) => {
    return (request, response, next) => {
        // declare & initialize the result object
        const result = schema.validate(request.body);

        // if error is not in the result object then the validation has passed
        if (result.error === undefined) {
            next(); // success
        } else {
            response.status(400).json({ message: result.error.message });
        }
    }
}

export default validateBody;