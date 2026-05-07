export const returnFilterdDestinations = (destinations, queryObj) => {
  let result = destinations;

  //here i'll check if the user specefied the continent
  if (queryObj.continent)
    result = result.filter(
      (destination) =>
        destination.continent.toLowerCase() ===
        queryObj.continent.toLowerCase(),
    );

  //here i'll check for the country
  if (queryObj.country)
    result = result.filter(
      (destination) =>
        destination.country.toLowerCase() === queryObj.country.toLowerCase(),
    );

  //here i'll check for is_open_to_public parameter
  if (queryObj.is_open_to_public) {
    const is_open_to_public = queryObj.is_open_to_public === "true";
    result = result.filter(
      (destination) => destination.is_open_to_public === is_open_to_public,
    );
  }

  return result;
};
