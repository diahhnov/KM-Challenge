const initialState = {
  loading: false,
};

export const GlobalReduc = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOAD':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
