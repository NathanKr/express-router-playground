console.log('app is loading');

const express = require('express')
const app = express();
const PORT = 8080;
// /const router = express.Router()
const filtersRouter = require('./routes/filters.js')
const usersRouter = require('./routes/users.js')

app.use('/filters',filtersRouter);
app.use('/users',usersRouter);

app.listen(PORT,()=>{
    console.log(`app is listening on port : ${PORT}`);
})
