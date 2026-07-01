import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Hi there! HTTP server is running on port 3002");
});

app.listen(PORT, () => {
  console.log(`HTTP Server is running on http://localhost:${PORT}`);
});