export const returnFilterdDestinations = (destinations, queryObj) => {
  const allowedQueries = ["continent", "country", "is_open_to_public"];
  const userQueries = Object.keys(queryObj).every((key) =>
    allowedQueries.includes(key.toLowerCase()),
  );

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
    if (is_open_to_public)
      destinations = destinations.filter(
        (destination) =>
          destination.is_open_to_public ===
          JSON.parse(is_open_to_public.toLowerCase()),
      );

    return destinations;
  } else
    return {
      status: "No data found",
      message: "There is no data found for the specefied parameters.",
      statusCode: 404,
    };
};
