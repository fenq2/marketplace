const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const Card = require('./models/Card');
const Order = require("./models/Order");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => {
            console.log('server start');
        });
    } catch (error) {
        console.log('Произошла ошибка старта сервера', error.message);
        process.exit(1);
    }
};

app.get('/api/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова!' });
    }
});

app.post('/api/order', async (req, res) => {
    try {
        const { name, phone } = req.body;

        const order = new Order({ name, phone });
      
        await order.save();

        res.json('Заказ успешно оформлен!');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

start();



