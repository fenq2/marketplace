const { Schema, model } = require('mongoose');

const order = new Schema({
    name: { type: String, required: true},
    phone: { type: String, required: true }
});

module.exports = model('Order', order);