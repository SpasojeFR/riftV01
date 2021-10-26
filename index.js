
const express = require('express');
const getNFT = require ('./getNft');
const getOpen = require ('./getOpen');
const getMaker = require ('./getMaker');

const app = express();

app.use(express.static('public'));

app.get('/api/nfts', async (req, res) => {
    const nfts = await getNFT();
    res.json(nfts);
});

app.get('/api/open', async (req, res) => {
    const nfts = await getOpen();
    res.json(nfts);
});

app.get('/api/maker', async (req, res) => {
    const nfts = await getMaker();
    res.json(nfts);
});

const port = process.env.PORT || 4242;

app.listen(port, () => {
    console.log(`listening at http://localhost${port}`)
});



