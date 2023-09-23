import { Add_Item, Edit_Item, Remove_Item } from "../../../../../TodoApp2/todoapp/src/share/constant/type";

export const initialState = {
  lists: [],
};

export const reducer = (state, action) => {
  console.log(state)

  switch (action.type) {
    case Add_Item:
      return { lists: [...state.lists, action.payload] };

    case Remove_Item:
      return { lists: state.lists.filter((item) => item.id !== action.payload) };

      case Edit_Item:
        const updatedLists = state.lists.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              updated: new Date(), // İstediğiniz bir tarih değeri ekleyebilirsiniz
              text: action.payload.newValue,
            };
          }
          return item;
        });
        return { ...state, lists: updatedLists };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};
