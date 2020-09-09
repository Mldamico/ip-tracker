import { types } from '../types/types';
const initialState = {
  ip: {},
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SETLOCATION:
      console.log(action.payload);
      return {
        ...state,
        ip: action.payload,
      };
    default:
      return state;
  }
};
