import { ADD_PASSENGER_SUCCESS, GET_BOOKED_PASSENGERS_LIST, GET_PASSENGERS_LIST_SUCCESS, REMOVE_PASSENGER_SUCCESS, VIEW_DETAILS_SUCCESS } from '../constants';

const INITIAL_STATE = {
  passengers: {
    data: []
  },
  bookTicket: {
    data: [],
    options : [
      {
          country: "India",
          longitude: 20.5937,
          latitude: 78.9629
      },
      {
          country: "Canada",
          longitude: 56.1304,
          latitude: 106.3468
      },
      {
          country: "Germany",
          longitude: 51.1657,
          latitude: 10.4515
      },
      {
          country: "Usa",
          longitude: 37.0902,
          latitude: 95.7129
      },
      {
          country: "England",
          longitude: 52.3555,
          latitude: 1.1743
      }
  ]
  }
}

const passengerReducer = (state = INITIAL_STATE, action: { type: any; data: any; }) => {
  
  switch (action?.type) {
    case GET_PASSENGERS_LIST_SUCCESS:
      return { ...state, passengers: action?.data };
    case REMOVE_PASSENGER_SUCCESS:
      return { ...state, bookTicket: action?.data  }
    case ADD_PASSENGER_SUCCESS:
      return { ...state, passengers: action?.data}
    case VIEW_DETAILS_SUCCESS:
      return { ...state}
    case GET_BOOKED_PASSENGERS_LIST:
      return {...state, bookTicket: action?.data }
    default:
      return state;
  }
}

export default passengerReducer