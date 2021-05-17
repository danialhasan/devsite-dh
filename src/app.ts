import express, { Application, Router, Request, Response } from "express";
import path from "path";
require("dotenv").config({ path: 'config/.env' });
const app: Application = express();
var expressLayouts = require("express-ejs-layouts");
var bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
//templating middleware
app.set("view engine", "ejs");
app.use(expressLayouts);

/**
 * request data middleware. this piece of important middleware 
 * lets us output the body of a post request. crucial for nodemailer functionality.
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static("public"));
//routes
app.use("/", require('./routes/index'));
app.use("*", require("./routes/404")); //404 handler

// app.get('/', (req: Request, res: Response) => {
//     res.send("Hello!")
// })

app.listen(port, () => console.log(`Listening on port ${port}`));
