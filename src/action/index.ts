import { ADD_PASSENGER_SUCCESS, BOOK_TICKET_SUCCESS, GET_PASSENGERS_LIST_SUCCESS, REMOVE_PASSENGER_SUCCESS, VIEW_DETAILS_SUCCESS } from "../constants";
import response from "../views/Dashboard/mock.json"

const getPassengersListSuccess = (data: any) => ({type : GET_PASSENGERS_LIST_SUCCESS, data})

const removePassengerSuccess = (id : any) => ({type : REMOVE_PASSENGER_SUCCESS, id})

const addPassengerSuccess = (data: any) => ({type : ADD_PASSENGER_SUCCESS, data})

const viewDetailSuccess = (id : any) => ({type : VIEW_DETAILS_SUCCESS, id})

const bookTicketSuccess = (data : any) => ({type : BOOK_TICKET_SUCCESS, data})


// GET PASSENGERS LIST
export const actionGetPassengersList = () => (dispatch: any) => { 
     return dispatch(getPassengersListSuccess(response))}

// REMOVE PASSENGER
export const actionRemovePassenger = (id:any) => (dispatch: any) => {
    console.log(id,"ididid");
    
    // return dispatch(removePassengerSuccess(id))
}

// ADD PASSENGER
export const actionAddPassenger = (name:any) => (dispatch : any) => {
    console.log(name,"addddd .....");
    
    return dispatch(addPassengerSuccess(name))
}

// VIEW DETAILS PAGE
export const actionViewDetails = (id : any) => (dispatch : any) => {
    // return dispatch(viewDetailSuccess(id))
}

// BOOK TICKET
export const actionBookTicket = (data:any) => (dispatch : any) => {
    return dispatch(bookTicketSuccess(data))
}