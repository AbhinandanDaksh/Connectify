const mongoose = require("mongoose");

const database = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Database connected');
    }).catch((error) => {
        console.log(error);
    });
};

// Export the function using CommonJS
module.exports = database;
