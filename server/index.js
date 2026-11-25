import express from 'express';
import dotenv from 'dotenv';

dotenv.config();



const port = process.env.PORT;
// server instance//
const app = express();
// middleware//
app.use(express.json());
// route handler//
app.get('/', (req, res) => {
  res.status(200).json({ message: "hello i hope you get this message" })
})

// listen //
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

