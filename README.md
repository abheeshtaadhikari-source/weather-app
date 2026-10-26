# 🌤️ Weather App

A dynamic Node.js and Express web application that provides real-time weather information and forecasts using an external Weather API and EJS templating.

---

## Features

* **Real-time Weather Data:** Displays current temperature, humidity, wind speed, and weather conditions for searched locations.
* **Server-Side Rendering:** Uses EJS templating engine to dynamically serve HTML pages.
* **Responsive UI:** Clean and simple user interface styled with custom CSS in the public directory.
* **Modular Structure:** Built with clean, scalable Express server architecture.

---

## 📁 Repository Structure

```text
weather-app/
├── public/          # Static assets (CSS styles, client-side scripts, images)
├── views/           # EJS template files for page rendering
├── app.js           # Main Express server configuration & API routes
├── package.json     # Node.js project metadata and dependencies
└── package-lock.json# Locked dependency versions
```

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Templating Engine:** EJS (Embedded JavaScript)
* **HTTP Client:** Axios / Fetch API
* **Frontend:** HTML5, CSS3, JavaScript

---

## 💻 Getting Started Locally

Follow these steps to set up and run the application on your local machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/abheeshtaadhikari-source/weather-app.git](https://github.com/abheeshtaadhikari-source/weather-app.git)
   cd weather-app

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up Environment Variables (if applicable):**

   Create a ```.env``` file in the root directory and add your Weather API key:
   ```Code snippet
   PORT=3000
   WEATHER_API_KEY=your_api_key_here

4. **Start the server:**
   ```bash
   node app.js
  Or with Nodemon (if installed):
  ```bash
  npx nodemon app.js
```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create your feature branch (```git checkout -b feature/AmazingFeature```).
3. Commit your changes (```git commit -m 'Add some AmazingFeature'```).
4. Push to the branch (```git push origin feature/AmazingFeature```).
5. Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

```
### How to add this to your repository:
1. On your open GitHub page for [abheeshtaadhikari-source/weather-app](https://github.com/abheeshtaadhikari-source/weather-app), click the **Add a README** button under the *README* section.
2. Paste the Markdown code block above into the editor.
3. Click **Commit changes...** at the top right to save it to your `main` branch.
```
