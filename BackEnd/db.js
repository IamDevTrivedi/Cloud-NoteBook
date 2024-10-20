const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';

const connectToMongo = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Failed to connect to Mongo:", error);
    }
};

module.exports = connectToMongo;
