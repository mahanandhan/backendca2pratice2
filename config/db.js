import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log('mongoose is connected successfully')
    } catch (error) {
        console.log(error);
    }
}

export default connectDB