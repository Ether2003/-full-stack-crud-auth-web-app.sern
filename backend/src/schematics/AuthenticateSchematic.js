/**
 * this file exports a Joi schematic for the authentication route
 */
import Joi from 'joi';

const AuthenticateSchematic = new Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export default AuthenticateSchematic;