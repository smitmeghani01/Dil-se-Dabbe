const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Joi = require("joi");

const menuSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true }
})

const validateMenuItem = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        image: Joi.string().required().label("image"),
        price: Joi.number().required().label("price"),
        size: Joi.string().required().label("size")
    });
    return schema.validate(data);
};

module.exports = mongoose.model('Menu', menuSchema)
module.exports = validateMenuItem 