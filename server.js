const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('unhandledRejection', (err) => {
  console.log('UNHANDELED REJECTION! SHUTTING DOWN....');
  console.log(err);
  process.exit(1);
});
process.on('uncaughtException', (err) => {
  console.log('UNCCAUGHT EXCEPTION! SHUTTING DOWN....');
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => console.log('DB connection successfull'));

const app = require('./app');
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on server ${port}... ${process.env.NODE_ENV}`);
});
