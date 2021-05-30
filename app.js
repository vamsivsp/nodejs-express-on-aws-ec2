const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>My TVS Express Demo App</h1> <h4>Message: Successfully created my first code deploy with code pipeline </h4> <p>Version 1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: 'Icecreams',
      price: 100
    }'\n',
    {
      productId: 'Milkshakes',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
