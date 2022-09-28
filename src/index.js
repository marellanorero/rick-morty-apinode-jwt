require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes');
const PORT = process.env.PORT || 5000;

app = express();



app.use(express.json());
app.use(express.urlencoded( { extended:false } ));

app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))