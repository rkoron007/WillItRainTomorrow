// I ended up creating an Express backend because I kept running into
// CORS problems.

const express = require('express');
const app = express();
import path from 'path';

import routes from './routes';

// for routing our index.html
app.use(express.static(path.resolve(__dirname + '../../client')));

// connecting to our router
app.use('/', routes);
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
