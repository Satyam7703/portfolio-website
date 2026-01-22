const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/photos", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "photos.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});