let express = require('express');
let app = express();

require('dotenv').config();

console.log('Hello World');

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));
app.use(logger);

console.log(process.env.MESSAGE_STYLE);

app.get('/', (req, res) => {
  // res.send('Hello Express')
  const absolutePath = __dirname + '/views/index.html';
  // const stylePath = __dirname + '/public/style.css';
  res.sendFile(absolutePath);
  console.log('TJABA');
});

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({ message: 'HELLO JSON' });
  } else {
    res.json({ message: 'Hello json' });
  }
});

app.listen(8000, () => {
  console.log('listen on port 8000');
});

function logger(req, res, next) {
  const text = `${req.method} ${req.path} - ${req.ip}`;

  console.log(text);
  next();
}
