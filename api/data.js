// api/data.js

const axios = require('axios');

export default async function handler(req, res) {
    const { skip = 0 } = req.query;

    try {
        const response = await axios.get(`https://members-api.parliament.uk/api/Location/Constituency/Search?skip=${skip}&take=20`);
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}