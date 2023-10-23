export function reducer(state, { type, payload }) {
  /*const minusGood = (id) => {
    const itemIndex = state.order.findIndex((orderItem) => orderItem.id === id);

    if (state.order[itemIndex].quantity > 1) {
      state.order[itemIndex].quantity = state.order[itemIndex].quantity - 1;
    }
    return state.order;
  };*/

  /*const plusGood = (id) => {
    const itemIndex = state.order.findIndex((orderItem) => orderItem.id === id);
    state.order[itemIndex].quantity = state.order[itemIndex].quantity + 1;
    return state.order;
  };*/

  state = JSON.parse(JSON.stringify(state));

  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case "BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "MINUS_GOOD": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      if (state.order[itemIndex].quantity > 1) {
        state.order[itemIndex].quantity = state.order[itemIndex].quantity - 1;
      }
      return {
        ...state,
        order: state.order,
      };
    }
    case "PLUS_GOOD": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      state.order[itemIndex].quantity = state.order[itemIndex].quantity + 1;
      return {
        ...state,
        order: state.order,
      };
    }
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.good.id
      );
      let newReturn = [];
      if (itemIndex < 0) {
        newReturn = [...state.order, payload.good];
      } else {
        state.order[itemIndex].quantity =
          state.order[itemIndex].quantity + payload.good.quantity;
        newReturn = [...state.order];
      }

      return {
        ...state,
        order: newReturn,
        alertName: payload.good.name,
      };
    }
    default:
      return state;
  }
}
