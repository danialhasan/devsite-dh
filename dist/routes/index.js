"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const path_1 = __importDefault(require("path"));
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config({ path: 'config/.env' });
// 
const email = process.env.EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/testApi', (req, res) => {
    res.send('Request received!');
});
router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /");
});
router.get('/sitemap.xml', function (req, res) {
    res.sendFile(path_1.default.resolve('public/assets/sitemap.xml'));
});
router.post('/contactform', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Message Received!");
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    const createTransporter = () => __awaiter(void 0, void 0, void 0, function* () {
        const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground");
        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN
        });
        const accessToken = yield new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject();
                }
                resolve(token);
            });
        });
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN
            }
        });
        return transporter;
    });
    const sendEmail = (emailOptions) => __awaiter(void 0, void 0, void 0, function* () {
        let emailTransporter = yield createTransporter();
        yield emailTransporter.sendMail(emailOptions);
    });
    sendEmail({
        subject: "DevSite - New Message",
        text: message,
        to: "danialhasan14@gmail.com",
        from: email
    });
    res.status(200);
    res.render('index');
    console.log("message sent");
    // var transporter = nodemailer.createTransport({
    //     service:'gmail',
    //     auth: {
    //         user: email,
    //         pass: emailPassword
    //     }
    // });
    // var mailOptions = {
    // from: 'testemail@gmail.com',
    // to: 'danialhasan14@gmail.com',
    // subject: 'Sending Email using Node.js',
    // text: 'That was easy!'
    // };
    // transporter.sendMail(mailOptions, function(error:Error, info:any){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
    // res.send('Message sent!')
}));
module.exports = router;
