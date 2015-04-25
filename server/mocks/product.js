module.exports = function(app) {
  var express = require('express');
  var productRouter = express.Router();

  productRouter.get('/', function(req, res) {
    res.send({
      'product': [{
  id:1,
    title:"jeans",
  description:" description...",
  price:10,
  src:"img/img1.png"
},
{
  id:2,
    title:"shirt",
  description:" description...",
  price:20,
  src:"img/img1.png"
},
{
  id:3,
    title:"watch",
  description:" description...",
  price:30,
  src:"img/img1.png"
}]
    });
  });

  productRouter.post('/products', function(req, res) {
    
  return true;

  });

  productRouter.get('/:id', function(req, res) {
    res.send({
      'product': {
        id: req.params.id
      }
    });
  });

  productRouter.put('/:id', function(req, res) {
    res.send({
      'product': {
        id: req.params.id
      }
    });
  });

  productRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/products', productRouter);
};
