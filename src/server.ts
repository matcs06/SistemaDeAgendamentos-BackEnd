import express from 'express';

import { productsRoutes } from './routes/products.routes';

const app = express();
app.use(express.json());

app.use('/products', productsRoutes);

app.get('/', (req, res) => res.json({ message: 'Hellor world' }));

app.listen(3333, () => {
  console.log('Server running on 3333');
});
