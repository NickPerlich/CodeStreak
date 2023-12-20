import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
    console.log('Code Streak app listening at http://localhost:8000');
});

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!'});
});

app.post('/streak', (req, res) => {
    res.send({ message: 'Great job for pushing to GitHub today!'});
});