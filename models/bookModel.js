import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Book = mongoose.model('book', bookSchema)
export default Book