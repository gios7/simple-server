import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (res, req) => {
    req.send({hello: 'world'});
});

const calcolaSumMed = (valori: number[]): [number, number] => {
    let somma = 0;
    for (let n of valori) {
        somma += n;
    }
    const media = somma / valori.length;
    return [somma, media];
};

app.post('/calcola', express.json(), (req, res) => {
    const body: number[] = req.body;
    const [somma, media] = calcolaSumMed(body);

    return res.send({somma: somma, media: media});
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server started at http://localhost:3000');
});