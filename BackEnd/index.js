const express = require('express');
const connectToMongo = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

connectToMongo();

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
