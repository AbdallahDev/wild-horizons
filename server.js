import http from "node:http";
import { fetchData } from "./db.js";
import { sendJSONResponse, filteredResponse } from "./utility.js";

const port = 8080;

const server = http.createServer(async (req, res) => {
  const errorObject = {
    status: "fail",
    message: "The requested URL not found",
    statusCode: 404,
  };
  const destinations = await fetchData();
  const requestedData = decodeURIComponent(
    req.url.split("/").pop().toLowerCase(),
  );

  if (req.url === "/api" && req.method === "GET") {
    sendJSONResponse(res, 200, destinations);
  } else if (req.url.startsWith("/api/continent")) {
    const filterdDestinations = destinations.filter(
      (destenation) => destenation.continent.toLowerCase() === requestedData,
    );
    filteredResponse(
      res,
      filterdDestinations,
      errorObject,
      "The requested continent not found.",
    );
  } else if (req.url.startsWith("/api/country")) {
    const filterdDestinations = destinations.filter(
      (destenation) => destenation.country.toLowerCase() === requestedData,
    );
    filteredResponse(
      res,
      filterdDestinations,
      errorObject,
      "The requested country not listed",
    );
  }
  //here the else will be excuted when the user request a wrong url
  else {
    errorObject.message = "The requested URL not found";
    sendJSONResponse(res, 404, errorObject);
  }
  res.end();
});

server.listen(port, () => {
  console.log(`server is running on http://localhost/${port}`);
});
