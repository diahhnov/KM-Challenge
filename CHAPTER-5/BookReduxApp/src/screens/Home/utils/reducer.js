const initialState = {
  bookRecommended: [],
  bookPopular: [],
  detailBook: {},
  refresh: false,
};

const HomeReduc = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOK_REC':
      return {
        ...state,
        bookRecommended: action.payload,
      };
    case 'SET_BOOK_POP':
      return {
        ...state,
        bookPopular: action.payload,
      };
    case 'DETAIL_BOOK':
      return {
        ...state,
        detailBook: action.detail,
      };
    case 'SET_REFRESH':
      return {
        ...state,
        refresh: action.payload,
      };
    default:
      return state;
  }
};
export default HomeReduc;
