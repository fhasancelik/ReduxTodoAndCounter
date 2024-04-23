const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT_COUNTER':
      return {
        count: state.count - 1,
      };
    case 'RESET_COUNTER':
   //   console.log('Reset Counter', action);
      return {
        count: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
