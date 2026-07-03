import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Hi there! HTTP server from the production branch ");
});

app.get("/info",(req,res)=>{
  res.send("hello my name is ishant khatri living in jhalawar peacefully hope the peace never dgoes aways  from production branch")
})
app.listen(PORT, () => {
  console.log(`HTTP Server is running on http://localhost:${PORT}`);
});