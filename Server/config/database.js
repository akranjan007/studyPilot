const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB connection successfull"))
    .catch((error) => {
        console.log("DB connection failed");
        console.error(error);
        process.exit(1);
    });
};