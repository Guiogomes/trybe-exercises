const express = require('express');
const { getAllProducts, getProductById } = require('../middlewares/productsMiddlewares');
const router = express.Router();

router.get('/allproducts', getAllProducts);

router.get('/:id', getProductById);

router.post('/allproducts', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;