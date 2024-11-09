const express = require('express');
const {connectDb} = require('./config/db');
const cors = require('cors');
const routes = require('./routes/userData');
require("dotenv").config();

const app = express();
app.use(express.static('dist'));

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
connectDb();

// app.get("/", (req, res) => {
//     res.send("Hello ");
//   });

app.use('/userData', routes)
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})