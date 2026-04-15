const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Working 🚀');
})

app.get('/health', (req, res) => {
  res.send('OKkkkkkkkkkkkkkk');
});

app.listen(3000, () => console.log('Server running on 3000'));


// Buntychauhan1021

