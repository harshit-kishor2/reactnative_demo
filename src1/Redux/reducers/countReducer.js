const countInitialValue = {
  count: 0,
};

const countReducer = (state = countInitialValue, action) => {
  console.log('Action', action.type);
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREASE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export {countReducer, countInitialValue};
