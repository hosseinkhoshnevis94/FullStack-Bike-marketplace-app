import  express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'
import dotenv from 'dotenv'


dotenv.config()



const app = express();

app.use(express.json())

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
app.use('/api/auth',authRoutes)