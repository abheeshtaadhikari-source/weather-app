const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const api_key = "9efa63ab33240567ebd48067f7b35942";

function getHeroImage(weatherMain) {
    const main = weatherMain ? weatherMain.toLowerCase() : "";
    if (main.includes("clear")) return "/images/sun.jpg";
    if (main.includes("cloud")) return "/images/cloud.jpg";
    if (main.includes("rain") || main.includes("drizzle")) return "/images/rain.jpg";
    if (main.includes("snow")) return "/images/snow.jpg";
    if (main.includes("mist") || main.includes("fog") || main.includes("haze") || main.includes("smoke") || main.includes("dust") || main.includes("sand") || main.includes("ash") || main.includes("squall") || main.includes("tornado")) return "/images/wind.jpg";
    return "/images/default.jpg";
}

app.get('/', async (request, response) => {
    console.log("GET / called")
    const defaultCity = "karkala";
    try {
        console.log("before calling api");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${api_key}&units=metric`;
        const result = await axios.get(url);
        console.log("after calling api");
        const weatherMain = result.data.weather && result.data.weather[0] ? result.data.weather[0].main : "";
        const heroImage = getHeroImage(weatherMain);

        response.render("index", {
            data: result.data,
            heroImage: heroImage,
            error: null
        });
    } catch (error) {
        console.error("GET / Error:", error.message);
        response.render("index", {
            data: null,
            heroImage: '/images/default.jpg',
            error: "Failed to fetch default weather data."
        });
    }
});

app.post('/', async (request, response) => {
    const city = request.body.city;
    if (!city || city.trim() === "") {
        return response.render("index", {
            data: null,
            heroImage: '/images/default.jpg',
            error: "Please enter a city name."
        });
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&appid=${api_key}&units=metric`;
        const result = await axios.get(url);
        const weatherMain = result.data.weather && result.data.weather[0] ? result.data.weather[0].main : "";
        const heroImage = getHeroImage(weatherMain);

        response.render("index", {
            data: result.data,
            heroImage: heroImage,
            error: null
        });
    } catch (error) {
        console.error("POST / Error:", error.message);
        let errorMsg = "Could not fetch weather data. Please try again.";
        if (error.response && error.response.status === 404) {
            errorMsg = `City "${city}" not found.`;
        } else if (error.message) {
            errorMsg = error.message;
        }

        response.render("index", {
            data: null,
            heroImage: '/images/default.jpg',
            error: errorMsg
        });
    }
});

app.listen(5000, () => {
    console.log('Running in localhost:5000');
});