export { }
const express = require('express');
const router = express.Router();
import path from "path";
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config({ path: 'config/.env' });
// 
const email = process.env.EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;

router.get('/', (req: Request, res: any) => {
    res.render('index');
})
router.post('/contactform', async (req:any, res: any) => {
  console.log("Message Received!")
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err:Error, token:any) => {
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
  };
    
  const sendEmail = async (emailOptions:any) => {
      let emailTransporter = await createTransporter();
      await emailTransporter.sendMail(emailOptions);
  };

  sendEmail({
      subject: "DevSite - New Message",
      text: message,
      to: "danialhasan14@gmail.com",
      from: email
  }
  );
  res.status(200);
  res.render('index')
  console.log("message sent")

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
})

module.exports = router;