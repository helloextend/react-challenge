import { Item_Removed,Item_Selected ,Action} from "./actions";

type InitialState =string[]

export const reducer = (initialState:InitialState=[] , action:Action) => {
  switch (action.type) {

    case Item_Selected : return [...initialState,action.payload];
    
    case Item_Removed : 
      let arr = initialState.filter((it) => it != action.payload);
      return arr;
    
    
    default:
      return initialState
  }
}
