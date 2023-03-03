/**
 * this file exports a Joi schematic for the register route
 */
import Joi from 'joi';

const RegisterSchematic = new Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
});

export default RegisterSchematic;