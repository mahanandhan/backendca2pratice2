import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import router from './routes/bookRoute.js';

dotenv.config()
const app = express();
app.use(express.json())
app.use('/api', router)
app.get('/', (req, res) => {
    res.send('server is running on the port...')
})

app.listen('3000', () => {
    connectDB()
    console.log('server is running on port 3000')
})