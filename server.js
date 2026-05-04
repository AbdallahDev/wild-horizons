import http from "node:http";
import { fetchData } from "./db.js";
import { sendJSONResponse } from "./utility.js";

const port = 8080;

const server = http.createServer(async (req, res) => {
  const errorResponse = {
    status: "fail",
    message: "The requested URL not found",
    statusCode: 404,
  };
  const destinations = await fetchData();
  const requestedContinent = decodeURIComponent(
    req.url.split("/").pop().toLowerCase(),
  );
  if (req.url.startsWith("/api/continent/") && req.method === "GET") {
    if (requestedContinent === "all") {
      sendJSONResponse(res, 200, destinations);
    }
    //here i'll check if the user requested a spesific continent
    else {
      const continentLocations = destinations.filter(
        (destenation) =>
          destenation.continent.toLowerCase() === requestedContinent,
      );
      if (continentLocations.length)
        sendJSONResponse(res, 200, continentLocations);
      else {
        errorResponse.message = "The requested continent not found.";
        sendJSONResponse(res, 404, errorResponse);
      }
    }
  }
  //here the else will be excuted when the user request a wrong url
  else {
    errorResponse.message = "The requested URL not found";
    sendJSONResponse(res, 404, errorResponse);
  }
  res.end();
});

server.listen(port, () => {
  console.log(`server is running on http://localhost/${port}`);
});
