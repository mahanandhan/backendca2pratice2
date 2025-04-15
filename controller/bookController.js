import express from 'express'
import Book from '../models/bookModel.js'
const postReq = async(req, res) => {
    const {name, price} = req.body;
    try {
        if(!name || !price){
            return res.json('please fill all the required')
        }
        const newBook = new Book({
            name,
            price
        })
        await newBook.save();
        res.json(newBook)
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Internal server error'})
    }
} 

const getReq = async(req, res) => {
    try {
        const book = await Book.find();
        res.json(book)
    } catch (error) {
        console.log(error);
        res.json('Internal server error');
    }
}
const delReq = async(req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json({message:'Book deleted successfully', book})
    } catch (error) {
        console.log(error)
        res.json('Internal server error');
    }
}
const putReq = async(req, res) => {
    const {name, price} = req.body;
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, {name, price}, {new: true});
        res.json({message:'book changed successfully', book});
    } catch (error) {
        console.log(error);
        res.json('Internal server error');
    }
}
export {postReq, getReq, delReq, putReq}