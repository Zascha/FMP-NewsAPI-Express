const newsManager = require('./modules/newsManagerModule');
const logger = require('./modules/logger').logger;
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/', router);

router.get("/news", (req, res) => {
  var response = newsManager.getNewsList();
  return res.send(response);
});

router.get('/news/:id', (req, res) => {
  var newsId = req.params.id;  
  var response = newsManager.getNewsById(newsId);
  return res.send(response);
});

router.post('/news', (req, res) => {  
  var categoryParam = req.body.category;
  var response = newsManager.getNewsByCategory(categoryParam);
  return res.send(response);
});

router.put('/news', (req, res) => {
  var news = req.body;
  newsManager.addToNewsList(news);
  return res.sendStatus(200);
});

router.delete('/news/:id', (req, res) => {
  var newsId = req.params.id;
  newsManager.deleteFromNewsList(newsId);
  return res.sendStatus(200);
});

app.use((req, res, next) => {
  logger.info(Date.now() + "called: " + req.protocol + '://' + req.get('host') + req.originalUrl);
});

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).send(err.message);
});

app.listen(3000, function () {
  logger.info('The App is running on port 3000.');
});