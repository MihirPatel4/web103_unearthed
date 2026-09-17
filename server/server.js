import express from 'express';
import giftsRouter from './routes/gifts.js'

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('./public'));
app.use('/gifts', giftsRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});