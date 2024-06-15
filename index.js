// apilist1/index.js

const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', async (req, res) => {
    const { skip = 0 } = req.query;

    try {
        const response = await axios.get(`https://members-api.parliament.uk/api/Location/Constituency/Search?skip=${skip}&take=20`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});