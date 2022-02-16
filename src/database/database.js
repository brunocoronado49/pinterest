import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/pinterest', {})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));