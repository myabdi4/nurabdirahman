require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5000;

// Enable CORS for the frontend to make requests to this server
app.use(cors());

// Endpoint to get articles based on category
app.get("/api/articles", async (req, res) => {
  const { category } = req.query; // Get category from query parameters
  const apiKey = process.env.VITE_API_KEY; // Read the API key from the environment variables

  if (!apiKey) {
    return res
      .status(500)
      .json({ message: "API key not found in environment variables." });
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
    res.json(response.data); // Send the articles data back to the frontend
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
