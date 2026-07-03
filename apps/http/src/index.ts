import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Hi there! HTTP server is running on port 3002");
});

app.get("/info",(req,res)=>{
  res.send("hello my name is ishant khatri living in jhalawar peacefully hope the peace never dgoes aways i dont like bathing too much")
})
app.listen(PORT, () => {
  console.log(`HTTP Server is running on http://localhost:${PORT}`);
});