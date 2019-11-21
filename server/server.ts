import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.listen(PORT, (): void => {
    console.log(`So awesome. Much wow. Listening on port: ${PORT}`);
});

export default app;
