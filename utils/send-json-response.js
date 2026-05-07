export const sendJSONResponse = (response, statusCode, data) => {
  response.statusCode = statusCode;
  response.setHeader("content-type", "application/json");
  response.write(JSON.stringify(data));
};
