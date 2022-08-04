import { ADD_PASSENGER_SUCCESS, BOOK_TICKET_SUCCESS, GET_BOOKED_PASSENGERS_LIST, GET_PASSENGERS_LIST_SUCCESS, REMOVE_PASSENGER_SUCCESS } from "../constants";
import response from "../views/Dashboard/mock.json"
import res from "../views/BookedPassengersList/mock.json"

const getPassengersListSuccess = (data: { message: string; status: number; data: { data: never[]; total: number; }; }) => ({type : GET_PASSENGERS_LIST_SUCCESS, data})

const addPassengerSuccess = (data: any) => ({type : ADD_PASSENGER_SUCCESS, data})

const bookTicketSuccess = (data : any) => ({type : BOOK_TICKET_SUCCESS, data})

const getBookedPassengersListSuccess = (data: { message: string; status: number; data: { data: { id: string; startDate: string; numberofPassengers: number; chooseClass: string; from: string; to: string; }[]; total: number; }; }) => ({ type : GET_BOOKED_PASSENGERS_LIST, data })

const removePassengerSuccess = (data:any) => ({ type : REMOVE_PASSENGER_SUCCESS, data })


interface LabeledValue {
    type: string;
    data: any;
  }

// GET PASSENGERS LIST
export const actionGetPassengersList = () => (dispatch: (arg0: LabeledValue) => any) => { 
    return dispatch(getPassengersListSuccess(response))
}

// ADD PASSENGER
export const actionAddPassenger = (name:any) => (dispatch: (arg0: LabeledValue) => any) => {
    return dispatch(addPassengerSuccess(name))
}

// BOOK TICKET
export const actionBookTicket = (data:any) => (dispatch: (arg0: LabeledValue) => any) => {
    return dispatch(bookTicketSuccess(data))
}

// GET BOOKED PASSENGERS LIST
export const actionGetBookedPassengersList = () => (dispatch: (arg0: LabeledValue) => any) => {
    return dispatch(getBookedPassengersListSuccess(res))
}

// REMOVE PASSENGER
export const actionRemovePassenger = (data: any) => (dispatch: (arg0: LabeledValue) => any) => {
    return dispatch(removePassengerSuccess({data : {data : [...data]}}))
}