const INITIAL_MARKET_STATE = {
  payload: {
    products: []
  },
  error: null,
  isFething: false,
}

const market = (state = INITIAL_MARKET_STATE, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default market;