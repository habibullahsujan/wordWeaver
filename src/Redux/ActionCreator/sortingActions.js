import { SORT_BY_UPLOAD } from "../ActionTypes/actionTypes";

export const sortingActions = (data) => {
  return {
    type: SORT_BY_UPLOAD,
    payload: data,
  };
};
