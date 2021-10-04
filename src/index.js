const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');

const db = require('./models');

const app = express();

app.use(express.json());
app.use(cors());

// Router
const productRouter = require('./router/Products');
app.use('/products', productRouter);

connectDB();
const port = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});
