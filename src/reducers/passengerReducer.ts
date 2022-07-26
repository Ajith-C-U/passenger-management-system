import { ADD_PASSENGER_SUCCESS, GET_PASSENGERS_LIST_SUCCESS, REMOVE_PASSENGER_SUCCESS, VIEW_DETAILS_SUCCESS } from '../constants';

const INITIAL_STATE = {
  passengers: {
    data: []
  },
  bookTicket: {
    data: []
  }
}

const passengerReducer = (state = INITIAL_STATE, action: { type: any; data: any; }) => {
  console.log(state, "data");

  switch (action?.type) {
    case GET_PASSENGERS_LIST_SUCCESS:
      return { ...state, passengers: action?.data };
    case REMOVE_PASSENGER_SUCCESS:
      return { ...state, passengers: action?.data  }
    case ADD_PASSENGER_SUCCESS:
      return { ...state, passengers: action?.data}
    case VIEW_DETAILS_SUCCESS:
      return { ...state}
    default:
      return state;
  }
}

export default passengerReducer