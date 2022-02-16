import mongoose from 'mongoose';

const imgSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    created: { type: Date, default: Date.now() }
});

const modelImage = mongoose.model('Image', imgSchema);

export default modelImage;