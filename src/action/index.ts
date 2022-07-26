import { GET_PASSENGERS_LIST_BEGINS, GET_PASSENGERS_LIST_FAILURE, GET_PASSENGERS_LIST_SUCCESS } from "../constants";


const getPassengersListBegins = () => ({type : GET_PASSENGERS_LIST_BEGINS})

const getPassengersListSuccess = (data: any) => ({type : GET_PASSENGERS_LIST_SUCCESS, data})

const getPassengersListFailure = () => ({type : GET_PASSENGERS_LIST_FAILURE})


// GET PASSENGERS LIST

export const actionGetPassengersList = () =>async (dispatch: any) => {
}