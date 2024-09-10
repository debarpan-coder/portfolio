import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    userName:String,
    title:String,
    desc:String,
    email:String
})

export const Contact = mongoose.model('Contact',ContactSchema);