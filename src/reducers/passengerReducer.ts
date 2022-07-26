import { GET_PASSENGERS_LIST_BEGINS, GET_PASSENGERS_LIST_FAILURE, GET_PASSENGERS_LIST_SUCCESS } from '../constants';

const INITIAL_STATE = {
  isLoading: false,
  passengers: {
    data: []
  }
}

const passengerReducer = (state = INITIAL_STATE, action: { type: any; data: any; }) => {
  switch (action.type) {
    case GET_PASSENGERS_LIST_BEGINS:
      return { ...state, isLoading: true };
    case GET_PASSENGERS_LIST_SUCCESS:
      return { ...state, isLoading: false, passengers: action.data };
    case GET_PASSENGERS_LIST_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default passengerReducer