import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health';
import usersRouter from './routes/users';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/health', healthRouter);
app.use('/api/users', usersRouter);

app.get('/', (_req, res) => {
  res.json({ status: 'ok', app: 'octofit-tracker-backend' });
});

export default app;
