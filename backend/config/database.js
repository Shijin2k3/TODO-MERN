const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_LOCAL_URI);
        console.log(`MongoDB is connected to the host ${con.connection.host}`);
    } catch (err) {
        console.error("Connection Error:", err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDatabase;