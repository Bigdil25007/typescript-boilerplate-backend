import http, { IncomingMessage, ServerResponse } from "http";

const PORT: number = Number(process.env.PORT) || 3000;

// Create the HTTP server
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "application/json" });

  // Example JSON response
  res.end(
    JSON.stringify({
      message: "Welcome to the minimalist backend server!",
      status: "success",
    })
  );
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
