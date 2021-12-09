const countIncreaseAction = data => dispatch => {
  dispatch({type: 'INCREASE'});
};

const countDecreaseAction = data => dispatch => {
  dispatch({type: 'DECREASE'});
};

export {countIncreaseAction, countDecreaseAction};
