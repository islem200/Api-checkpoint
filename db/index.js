const mongoose = require('mongoose');


async function connectDb() {
    try{
        await mongoose.connect('mongodb://localhost/school');
        console.log('We Successfully connected to mongodb...');

    }catch(error){
        console.log('We could not connect to mongodb', error.message);

    }
    
    
}
module.exports = connectDb;