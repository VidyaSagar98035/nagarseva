import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to NagarSeva Backend API',
    project: 'NagarSeva',
    status: 'Running'
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'NagarSeva API is healthy'
  });
});

export default app;