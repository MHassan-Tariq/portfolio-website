const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('.')); // Serve static files from current directory
app.use(express.json());
app.use(cors());

// Email Route
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail
                pass: process.env.GMAIL_PASS  // Your App Password
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER, // Send to yourself
            subject: `Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            replyTo: email
        };

        await transporter.sendMail(mailOptions);
        
        res.json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email. Check server logs.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
