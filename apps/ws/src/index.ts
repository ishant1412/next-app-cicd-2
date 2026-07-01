import { WebSocketServer } from "ws";

const PORT = 8080;

const wss = new WebSocketServer({
  port: PORT,
});

wss.on("connection", (ws) => {
  console.log("Client connected.");

  ws.send("Hi there! WebSocket server is running on port 8080");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected.");
  });
});

console.log(`WebSocket Server is running on ws://localhost:${PORT}`);
