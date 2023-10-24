import express from 'express';

const app = express();

let cnt = 0;

app.get('/', (req, res) => {
    const minus = Number(req.query.minus);
    if (Number.isInteger(minus)) {
        cnt -= minus;
    }
    else {
        cnt += 1;
    }
    
    return res.send(`<h1> Ciao Giorgio, sei entrato ${cnt} volte. </h1>`);
})

app.get('/saluti/:name', (req, res) => {
    const name: string = req.params.name;
    return res.send(`<h1> Saluti ${name.toUpperCase()} </h1>`);
})

app.get('/somma/:n1/:n2', (req, res) => {
    const num1: number = Number(req.params.n1);
    const num2: number = Number(req.params.n2);
    const somma: string = (num1+num2).toString();
    return res.send(`<h1> La somma è: ${somma} </h1>`);
})

app.get('/differenza/:n1/:n2', (req, res) => {
    const num1: number = Number(req.params.n1);
    const num2: number = Number(req.params.n2);
    const somma: string = (num1-num2).toString();
    return res.send(`<h1> La differenza è: ${somma} </h1>`);
})

app.get('*', (req, res) => {
    return res.status(404).send("<h1> 404 Pagina non trovata </h1>");
})

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});