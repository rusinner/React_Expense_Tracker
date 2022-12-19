const contextReducer = (state, action) => {
  //because i got transactions in two variables i just used let and not const
  //and reassigned it in two different places
  let transactions;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      return transactions;

    default:
      return state;
  }
};

export default contextReducer;
