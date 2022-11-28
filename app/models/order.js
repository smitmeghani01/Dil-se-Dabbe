const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi');

const orderSchema = new Schema({
    customerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
                },
    items: { type: Object, required: true },
    phone: { type: String, required: true},
    address: { type: Object, required: true},
    paymentType: { type: String, required: true, default: 'COD'},
    paymentStatus: { type: Boolean, default: false },
    status: { type: String, default: 'order_placed'},
}, { timestamps: true })


const validateOrder = (data) => {
    const schema = Joi.object({
        customerId: '63680d7baac0852f50bb7e57',
        items: Joi.object({
            _id: Joi.string(),
            name: Joi.string().required().label("name"),
            image: Joi.string().required().label("image"),
            price: Joi.number().required().label("price"),
            size: Joi.string().required().label("size")
        }),
        phone: Joi.string().required().label("phone"),
        address: Joi.string().required(),
        paymentType: Joi.string().required(),
        paymentStatus: Joi.boolean(),
        status: Joi.string(),
    });
    return schema.validate(data);
};


module.exports = mongoose.model('Order', orderSchema)
// module.exports = {validateOrder}