const errorMessages = {
  continent: "The requested continent not found.",
  country: "The requested country not listed",
};
// export const sendJSONResponse = (response, statusCode, data) => {
//   response.statusCode = statusCode;
//   response.setHeader("content-type", "application/json");
//   response.write(JSON.stringify(data));
// };

const filterdDestinations = (destinations, queryObj) => {
  if (queryObj.country) {
    return destinations.filter((destenation) => {
      return (
        destenation.country.toLowerCase() === queryObj.country.toLowerCase()
      );
    });
  } else if (queryObj.continent) {
    return destinations.filter((destenation) => {
      return (
        destenation.continent.toLowerCase() === queryObj.continent.toLowerCase()
      );
    });
  } else {
    return destinations;
  }
};
