import app from './app';
import connectDatabase from './config/db';

const PORT = process.env.PORT || 8000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Octofit Tracker API listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start Octofit Tracker API', error);
    process.exit(1);
  });
