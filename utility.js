export const sendJSONResponse = (response, statusCode, responseData) => {
  response.statusCode = statusCode;
  response.setHeader("content-type", "application/json");
  response.write(JSON.stringify(responseData));
};

export const filteredResponse = (response, filterdDestinations,errorObject,errorMessage) => {
  if (filterdDestinations.length)
    sendJSONResponse(response, 200, filterdDestinations);
  else {
    errorObject.message = errorMessage;
    sendJSONResponse(response, 404, errorObject);
  }
};
