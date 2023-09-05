import { 
    GET_DATAFORM,
    GET_ANSWERS
  } from "./actions";
  
  const initialState = {
    dataForm: [],
    answers: [],
  };
  
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_DATAFORM: 
        return {
          ...state,
          dataForm: action.payload
        }

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