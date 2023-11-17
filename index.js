require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

let tempShortUrl = {};

app.post('/api/shorturl', function(req, res) {
  let originalUrl = req.body['url'];
  const formatPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
  const startPattern = /^(https?:\/\/)?(www\.)?/;
  const endPattern = /(\.[a-zA-Z]{2,})+$/;
  let shorturlInNum = Math.floor(Math.random() * 1000) + 1;
  if (startPattern.test(originalUrl) && endPattern.test(originalUrl)) {
    res.json({
        error: 'invalid url',
      });
    } else {
      tempShortUrl[shorturlInNum]= originalUrl;
      res.json({
      original_url: originalUrl,
      short_url: shorturlInNum,
    });
  }
})

app.get('/api/shorturl/:newurl', function(req, res) {
  let shortenedUrl = req.params.newurl;
  if (tempShortUrl.hasOwnProperty(shortenedUrl)) {
      return res.redirect(tempShortUrl[shortenedUrl]);
  } else {
    res.json({
      error: 'invalid url',
    });
  }
})