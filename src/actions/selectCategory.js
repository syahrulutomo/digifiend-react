export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = (category) => {
    return {
        type: SELECT_CATEGORY,
        payload: category
    }
  }
  