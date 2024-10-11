// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());




// app.use(cors({ origin: 'http://localhost:3000' }));  // Assuming frontend runs on port 3000





// app.get('/api/weather', async (req, res) => {
//     try {
//       const city = req.query.city;
//       const apiKey = process.env.OPENWEATHER_API_KEY;
//       const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//       const response = await axios.get(url);
//       res.json(response.data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
//       res.status(500).json({ error: error.response ? error.response.data : 'Unable to fetch weather data' });
//     }
//   });
  


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// console.log("API Key: ", process.env.OPENWEATHER_API_KEY);



const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' })); // Assuming frontend runs on port 3000
app.use(express.json());

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required.' });
    }

    try {
        const apiKey = process.env.OPENWEATHER_API_KEY; // Ensure this is set correctly in .env
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: error.response ? error.response.data : 'Unable to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
