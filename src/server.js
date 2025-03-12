import express from 'express';
import cors from 'cors';
import open from 'open';

const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {});

app.get('/home', (req, res) => {
    res.json({ message: 'Welcome to Home!' });
});

app.get('/about', (req, res) => {
    res.json({ message: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.json({ message: 'Contact Us' });
});

app.get('/blog', (req, res) => {
    res.json({ message: 'Our Blog' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    open('http://localhost:5000');
});
