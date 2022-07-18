let defaultState = {
  selectedItems: { items: [], restoName: "" },
};

let CartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      
      if (action.payload.checkboxValue) {
        console.log("Added");
        
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restoName: action.payload.restoName
        };
      } else {
        console.log("REMOVED");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title != action.payload.title
            )
          ],
          restoName: action.payload.restoName
        };

      }
      console.log(newState)
        return newState;
    }

    default:
      return state;
  }
};

export default CartReducer;
