import express from 'express';
const router = express.Router();
import { createDate } from "./util/util";
import request from 'request';
import path from 'path';


router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/api/location/:data', (req, res) => {
  let location = req.params['data'];
  let url =
  `https://www.metaweather.com/api/location/search/?query=${location}`;
  req.pipe(request(url)).pipe(res);
});


router.get('/api/weather/:woeid', (req, res) => {
  let woeid = req.params['woeid'];
  // will find the weather for the next 5 days
  let url =
  `https://www.metaweather.com/api/location/${woeid}/`;
  req.pipe(request(url)).pipe(res);
});

// route to redirect back to home page
// just in case you type in something invalid
router.get('/*', (req, res) => {
  res.redirect('/');
});

export default router;
