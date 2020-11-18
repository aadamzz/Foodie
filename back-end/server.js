const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const connectDB = require('./database');
const helmet = require('helmet');

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "30mb" }));

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Foodie API</h1>")
})

//connecting to database
connectDB();

//routes
app.use('/recipe', require('./routes/recipeRouter'))