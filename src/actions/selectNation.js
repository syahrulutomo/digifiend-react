export const SELECT_COUNTRY = 'SELECT_COUNTRY';

export const selectCountry = (country) => {
  return {
      type: SELECT_COUNTRY,
      payload: country
  }
}
