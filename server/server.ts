import * as express from 'express';
import {Request, Response} from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.get('*', (req: Request, res: Response) => {
    res.sendFile('index.html');
});

app.listen(PORT, (): void => {
    console.log(`Listening on port: ${PORT}`);
});
