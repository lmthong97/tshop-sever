const express = require('express');
const port = 3001;
const cors = require('cors');
require('dotenv').config();

const db = require('./models');

const app = express();

app.use(express.json());
app.use(cors());

// Router
const productRouter = require('./router/Products');
app.use('/products', productRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || port, () => {
        console.log(`Server running on http://localhost:${port}`);
    }).catch((err) => console.log(err));
});
