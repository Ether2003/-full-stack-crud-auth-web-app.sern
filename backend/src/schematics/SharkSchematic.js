/**
 * this file defines a Shark schematic for the Shark route
 * author: Refaat 🌻
 */
import Joi from 'joi';

const SharkSchematic = new Joi.object({
    name: Joi.string().required()
});

export default SharkSchematic;