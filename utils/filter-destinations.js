export const returnFilterdDestinations = (destinations, queryObj) => {
  const allowedQueries = ["continent", "country", "is_open_to_public"];
  const userQueries = Object.entries(queryObj).every(([key, value]) => {
    key = key.toLowerCase();
    value = value.toLowerCase();

    if (!allowedQueries.includes(key)) return false;

    if (key === "is_open_to_public" && !(value === "true" || value === "false"))
      return false;

    return true;
  });

  if (userQueries) {
    const { continent, country, is_open_to_public } = queryObj;
    // here i'll check if the user specefied the continent
    if (continent)
      destinations = destinations.filter(
        (destination) =>
          destination.continent.toLowerCase() ===
          queryObj.continent.toLowerCase(),
      );

    //here i'll check for the country
    if (country)
      destinations = destinations.filter(
        (destination) =>
          destination.country.toLowerCase() === queryObj.country.toLowerCase(),
      );

    //here i'll check for is_open_to_public parameter
    if (is_open_to_public === "true" || is_open_to_public === "false")
      destinations = destinations.filter(
        (destination) =>
          destination.is_open_to_public ===
          JSON.parse(is_open_to_public.toLowerCase()),
      );
    // else break;

    return destinations;
  } else
    return {
      status: "something wrong with the query",
      message:
        "There is something wrong with the query for the specefied parameters.",
      statusCode: 400,
    };
};
