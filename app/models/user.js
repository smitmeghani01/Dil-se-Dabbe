const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi')

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' }
}, { timestamps: true })


const validateUser = (data) =>{
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        email: Joi.string().required().label("email"),
        password: Joi.number().required().label("password"),
        role: "admin"
    });
    return schema.validate(data);
}
module.exports = mongoose.model('User', userSchema)
module.exports = validateUser