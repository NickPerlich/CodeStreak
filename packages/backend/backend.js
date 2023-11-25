import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
    console.log('Code Streak app listening at http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});