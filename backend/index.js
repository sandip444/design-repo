const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Custom middleware example
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.post('/send', (req, res) => {
    const { firstName, lastName, email, phone, description } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'samp95532@gmail.com',
        pass: 'Sandip001@'
      }
    });
  
    const mailOptions = {
      from: email,
      to: 'samp95532@gmail.com',
      subject: 'Contact Form Submission',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`
    };
    console.log(mailOptions)
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
