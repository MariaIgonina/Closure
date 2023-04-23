const express = require ('express');
const cors = require('cors')
const router = require ('./router');
const app = new express();
const sequelize = require('./model/index');

const PORT = 3009;

app.use(cors())
app.use(express.json());
app.use(router);

sequelize.authenticate();
sequelize.sync();

app.listen(PORT, () =>
console.log(`Server is listening on http://localhost:${PORT}`));