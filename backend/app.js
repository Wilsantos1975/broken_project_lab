const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000; 
const carsRouter = require('./routes/cars/cars');
const userRouter = require('./routes/users/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use('/cars', carsRouter);
app.use('/users', userRouter);

app.use((err, req, res, next) => {

    res.status(500).json({
        err
    })
})


app.listen(PORT, () => console.log("Listening"));
