import Joi from 'joi';

const create = Joi.object({
    title: Joi.string().required(),

    notes: Joi.array().items(Joi.string()).required(),

});

const update = Joi.object({

    notes: Joi.array().items(Joi.string()).required()

});
const invite = Joi.object({


    readOnlyList: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)),
    readAndWriteList: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)),

});
export default { create,update,invite };
