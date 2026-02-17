require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chaska');
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        console.log('Continuing without database connection...');
    }
};
connectDB();

// Routes
app.post('/api/orders', async (req, res) => {
    try {
        const { customerName, mobileNumber, quantity } = req.body;

        if (!customerName || !mobileNumber || !quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Pricing Logic: 70 per item, 20 discount per pair
        let totalPrice = quantity * 70;
        const pairs = Math.floor(quantity / 2);
        totalPrice -= pairs * 20;

        const newOrder = new Order({
            customerName,
            mobileNumber,
            quantity,
            totalPrice,
            address: 'KIIT road in front of KFC'
        });

        await newOrder.save();

        // Mock Notification
        console.log(`[NOTIFICATION] New Order Placed!`);
        console.log(`Customer: ${customerName}, Mobile: ${mobileNumber}, Qty: ${quantity}, Total: ${totalPrice}`);

        res.status(201).json({
            message: 'Order placed successfully!',
            order: newOrder
        });
    } catch (error) {
        console.error('Order Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send('CHASKA API is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
