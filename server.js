import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentRouter from "./routes/studentRoute.js";
import staffRouter from "./routes/staff.js";
import userRouter from "./routes/user.js";
import customerRouter from "./routes/customer.js";
import productRouter from "./routes/product.js";
import expressEjsLayouts from "express-ejs-layouts";

// Environment var
dotenv.config();
const PORT = process.env.PORT || 5001;

// express init
const app = express();

// use express middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));


// static folder 
app.use(express.static('public'));

// ejs setup
app.set("view engine", 'ejs');
app.use(expressEjsLayouts)
app.set('layout', 'layouts/app');


//app routes 
app.use(studentRouter);
app.use(staffRouter);
app.use(userRouter);
app.use(customerRouter);
app.use(productRouter);


// server listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgGreen);
});

