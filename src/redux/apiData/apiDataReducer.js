import { ADD_DATA, LOADER } from "./apiDataActions";

export const initialstate = {
  loading: false,
  data: [],
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...action.payload],
      };
    case LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
};
