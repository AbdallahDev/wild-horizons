import http from "node:http";
import { fetchData } from "./db.js";

const port = 8080;

const server = http.createServer(async (req, res) => {
  const destenations = await fetchData();
  res.end(JSON.stringify(destenations));
});

server.listen(port, () => {
  console.log(`server is running on http://localhost/${port}`);
});
