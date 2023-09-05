import { 
    GET_ANSWERS
  } from "./actions";
  
  const initialState = {
    answers: [],
  };
  
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_ANSWERS:
        return {
          ...state,
          answers: action.payload
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;