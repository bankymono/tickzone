import api from "../../api";
import { CREATE_TICKETS_COMPLETE, CREATE_TICKETS_FAIL, CREATE_TICKETS_REQUEST, CREATE_TICKETS_SUCCESS, EVENT_TICKETS_LIST_FAIL, EVENT_TICKETS_LIST_REQUEST, EVENT_TICKETS_LIST_SUCCESS } from "../constants/ticketConstants";

export const getEventTickets = (eventId) => async (dispatch) => {

    try {
        dispatch({
            type: EVENT_TICKETS_LIST_REQUEST
        })

        const { data } = await api.get(`/event/${eventId}/tickets`)
        // const { data } = await axios.get('http://localhost:8080/user/events',{"Authorization":`Bearer ${localStorage.getItem("userToken").token}`})
        console.log(data,"haaaa")
        dispatch({
            type: EVENT_TICKETS_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: EVENT_TICKETS_LIST_FAIL,
            payload: error.response
        })
    }
}


export const createTickets = (eventId,tickets) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_TICKETS_REQUEST
        })
        console.log(tickets)
        const {data} = await api.post(`/ticket/create/${eventId}`, tickets)
        
        dispatch({
            type:CREATE_TICKETS_SUCCESS,
            payload:data
        })

        dispatch({
            type:CREATE_TICKETS_COMPLETE
        })

    } catch (error) {   
        console.log("ANother error", error)
        dispatch({
            type:CREATE_TICKETS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message[0]
            : error.message,
        })
    }
}