import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/connectDB.js';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes.js';
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors({ credentials: true, origin: true }));

// Connect to MongoDB
connectDB();


app.get('/', (req, res) => {
  res.send('🚀 Server Running');
});

app.use('/api/auth', authRoutes);  
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
  console.log(`✅ Server is listening on PORT ${PORT}`);
});
