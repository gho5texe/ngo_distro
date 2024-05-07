const mongoose = require('mongoose');

mongoose.connect(process.env.GET_MONGO_URI)

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
})

mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})
