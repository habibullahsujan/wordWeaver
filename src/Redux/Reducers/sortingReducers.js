import { SORT_BY_UPLOAD } from "../ActionTypes/actionTypes";


const initialState = {
  sort_type:'',
};

export const sortingReducers = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_UPLOAD:
      return {
        ...state,
        sort_type:action.payload,
      };
    default:
      return state;
  }
};
