import { CREATE_TICKETS_COMPLETE, CREATE_TICKETS_FAIL, CREATE_TICKETS_REQUEST, CREATE_TICKETS_SUCCESS, EVENT_TICKETS_LIST_FAIL, EVENT_TICKETS_LIST_REQUEST, EVENT_TICKETS_LIST_SUCCESS } from "../constants/ticketConstants";

export const eventTicketsReducer = (state = { eventTicketsList: {}, eventTicketsLoading: true }, action) => {
    switch (action.type) {
        case EVENT_TICKETS_LIST_REQUEST:
            return { eventTicketsLoading: true, eventTicketsList: {} }
        case EVENT_TICKETS_LIST_SUCCESS:
            return { eventTicketsLoading: false, eventTicketsList: action.payload }
        case EVENT_TICKETS_LIST_FAIL:
            return { eventTicketsLoading: false, eventTicketsError: action.payload }
      
        default:
            return state;
    }
}


export const createTicketsReducer = (state={ticketsSuccess:false}, action) => {
    switch(action.type){
        case CREATE_TICKETS_REQUEST:
            return {
                ticketsLoading:true
            }
        case CREATE_TICKETS_SUCCESS:
            return {
                ticketsLoading:false,
                ticketsSuccess:true,
                ticketsData:action.payload
            }
        case CREATE_TICKETS_COMPLETE:
            return {
                ticketsLoading:false,
                ticketsSuccess:false,
            }
        case CREATE_TICKETS_FAIL:
            return {
                ticketsLoading:false,
                ticketsError:action.payload,
            }

        default:
            return state
    }
}