export const sendJSONResponse = (response, statusCode, responseData) => {
  response.statusCode = statusCode;
  response.setHeader("content-type", "application/json");
  response.write(JSON.stringify(responseData));
};
