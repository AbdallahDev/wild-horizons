export const sendJSONResponse = (response, statusCode, data) => {
  response.statusCode = statusCode;
  response.setHeader("content-type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET");
  response.write(JSON.stringify(data));
};
