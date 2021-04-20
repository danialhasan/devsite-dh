"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config({ path: 'config/.env' });
const app = express_1.default();
var expressLayouts = require("express-ejs-layouts");
var bodyParser = require('body-parser');
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
app.use(express_1.default.static("public"));
//routes
app.use("/", require('./routes/index'));
app.use("*", require("./routes/404")); //404 handler
// app.get('/', (req: Request, res: Response) => {
//     res.send("Hello!")
// })
app.listen(port, () => console.log(`Listening on port ${port}`));
