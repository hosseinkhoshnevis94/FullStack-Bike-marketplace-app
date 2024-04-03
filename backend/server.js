import  express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'
// import {confing as dotenvConfig } from 'dotenv'
import dotenv from 'dotenv'

// dotenvConfig()

dotenv.config()



const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.use('/api/user',userRoutes)