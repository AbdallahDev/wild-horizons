import http from "node:http";
import { fetchData } from "./db.js";
import { sendJSONResponse } from "./utils/send-json-response.js";
import { returnFilterdDestinations } from "./utils/filtered-destinations.js";

const port = 8000;

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);

  const destinations = await fetchData();
  if (urlObj.pathname === "/api" && req.method === "GET") {
    const filterdDestinations = returnFilterdDestinations(
      destinations,
      queryObj,
    );
    sendJSONResponse(res, 200, filterdDestinations);
  } else {
    sendJSONResponse(res, 404, {
      status: "fail",
      message: "The requested URL not found.",
      statusCode: 404,
    });
  }
  res.end();
});

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
