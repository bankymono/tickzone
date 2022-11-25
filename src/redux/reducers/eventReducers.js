import { 
    BUY_TICKET_COMPLETE,
    BUY_TICKET_FAIL,
    BUY_TICKET_REQUEST,
    BUY_TICKET_SUCCESS,
    CLEAR_EVENT_DATA,
    CREATE_EVENT_COMPLETE, 
    CREATE_EVENT_FAIL, 
    CREATE_EVENT_REQUEST, 
    CREATE_EVENT_SUCCESS, 
    DELETE_EVENT_FAIL, 
    DELETE_EVENT_REQUEST, 
    DELETE_EVENT_SUCCESS, 
    EVENT_DETAIL_FAIL, 
    EVENT_DETAIL_REQUEST,
    EVENT_DETAIL_SUCCESS,
    GET_AVAILABLE_TICKETS_FAIL,
    GET_AVAILABLE_TICKETS_REQUEST,
    GET_AVAILABLE_TICKETS_SUCCESS,
    PUBLISHED_EVENT_LIST_FAIL,
    PUBLISHED_EVENT_LIST_REQUEST,
    PUBLISHED_EVENT_LIST_SUCCESS,
    PUBLISH_EVENT_COMPLETE,
    PUBLISH_EVENT_FAIL,
    PUBLISH_EVENT_REQUEST,
    PUBLISH_EVENT_SUCCESS,
    STORE_EVENT_ID,
    UPDATE_EVENT_COMPLETE,
    UPDATE_EVENT_FAIL,
    UPDATE_EVENT_REQUEST,
    UPDATE_EVENT_SUCCESS,
    UPLOAD_IMAGE_COMPLETE,
    UPLOAD_IMAGE_FAIL,
    UPLOAD_IMAGE_REQUEST,
    UPLOAD_IMAGE_SUCCESS} from "../constants/eventConstants"

export const storeEventIdReducer = (state={theEventId:""}, action) => {
    if(action.type === STORE_EVENT_ID){
        return {
            
            theEventId:action.payload
        }
    }
    return state

}

export const createEventReducer = (state={eventSuccess:false}, action) => {
    switch(action.type){
        case CREATE_EVENT_REQUEST:
            return {
                eventLoading:true
            }
        case CREATE_EVENT_SUCCESS:
            return {
                eventLoading:false,
                eventSuccess:true,
                event:action.payload
            }
        case CREATE_EVENT_COMPLETE:
            return {
                eventLoading:false,
                eventSuccess:false,
            }
        case CREATE_EVENT_FAIL:
            return {
                eventLoading:false,
                eventError:action.payload,
            }

        default:
            return state
    }
}

export const updateEventReducer = (state={upeventSuccess:false}, action) => {
    switch(action.type){
        case UPDATE_EVENT_REQUEST:
            return {
                upeventLoading:true
            }
        case UPDATE_EVENT_SUCCESS:
            return {
                upeventLoading:false,
                upeventSuccess:true,
                upevent:action.payload
            }
        case UPDATE_EVENT_COMPLETE:
            return {
                upeventLoading:false,
                upeventSuccess:false,
            }
        case UPDATE_EVENT_FAIL:
            return {
                upeventLoading:false,
                eventError:action.payload,
            }

        default:
            return state
    }
}


export const uploadEventImageReducer = (state={imageSuccess:false}, action) => {
    switch(action.type){
        case UPLOAD_IMAGE_REQUEST:
            return {
                imageLoading:true
            }
        case UPLOAD_IMAGE_SUCCESS:
            return {
                imageLoading:false,
                imageSuccess:true,
                imageData:action.payload
            }
        case UPLOAD_IMAGE_COMPLETE:
            return {
                imageLoading:false,
                imageSuccess:false,
            }
        case UPLOAD_IMAGE_FAIL:
            return {
                imageLoading:false,
                imageError:action.payload,
            }

        default:
            return state
    }
}


export const eventDetailReducer = (state = { eventDetailData: {}, eventDetailLoading: true }, action) => {
    switch (action.type) {
        case EVENT_DETAIL_REQUEST:
            return { eventDetilLoading: true, eventDetailData: {} }
        case EVENT_DETAIL_SUCCESS:
            return { eventDetailLoading: false, eventDetailData: action.payload }
        case EVENT_DETAIL_FAIL:
            return { eventDetailLoading: false, eventDetailError: action.payload }
        default:
            return state;
    }
}

export const deleteEventReducer = (state = { deletedEventData: null, deletedEventLoading: true }, action) => {
    switch (action.type) {
        case DELETE_EVENT_REQUEST:
            return { deletedEventLoading: true, deletedEventData: null }
        case DELETE_EVENT_SUCCESS:
            return { deletedEventLoading: false, deletedEventData: action.payload }
        case DELETE_EVENT_FAIL:
            return { deletedEventLoading: false, deletedEventError: action.payload }
        default:
            return state;
    }
}

export const clearUserEventsReducer = (state={userEventsList:{}}, action) => {
    if(action.type===CLEAR_EVENT_DATA) {
        return {
            userEventsList:{}
        }
    }

    return state
}


export const publishEventReducer = (state={publishEvtSuccess:false}, action) => {
    switch(action.type){
        case PUBLISH_EVENT_REQUEST:
            return {
                publishEvtLoading:true
            }
        case PUBLISH_EVENT_SUCCESS:
            return {
                publishEvtLoading:false,
                publishEvtSuccess:true,
                publishEvtData:action.payload
            }
        case PUBLISH_EVENT_COMPLETE:
            return {
                publishEvtLoading:false,
                publishEvtSuccess:false,
            }
        case PUBLISH_EVENT_FAIL:
            return {
                publishEvtLoading:false,
                publishEvtError:action.payload,
            }

        default:
            return state
    }
}


export const publishedEventsReducer = (state = { publishedEventsList: {}, publishedEventsLoading: true }, action) => {
    switch (action.type) {
        case PUBLISHED_EVENT_LIST_REQUEST:
            return { publishedEventsLoading: true, publishedEventsList: {} }
        case PUBLISHED_EVENT_LIST_SUCCESS:
            return { publishedEventsLoading: false, publishedEventsList: action.payload }
        case PUBLISHED_EVENT_LIST_FAIL:
            return { publishedEventsLoading: false, publishedEventsError: action.payload }
      
        default:
            return state;
    }
}


export const availableTicketsReducer = (state = { availableTicketsList: {}, availableTicketsLoading: true }, action) => {
    switch (action.type) {
        case GET_AVAILABLE_TICKETS_REQUEST:
            return { availableTicketsLoading: true, availableTicketsList: {} }
        case GET_AVAILABLE_TICKETS_SUCCESS:
            return { availableTicketsLoading: false, availableTicketsList: action.payload }
        case GET_AVAILABLE_TICKETS_FAIL:
            return { availableTicketsLoading: false, availableTicketsError: action.payload }
      
        default:
            return state;
    }
}


export const buyTicketReducer = (state={buyTicketSuccess:false}, action) => {
    switch(action.type){
        case BUY_TICKET_REQUEST:
            return {
                buyTicketLoading:true
            }
        case BUY_TICKET_SUCCESS:
            return {
                buyTicketLoading:false,
                buyTicketSuccess:true,
                buyTicketData:action.payload
            }
        case BUY_TICKET_COMPLETE:
            return {
                buyTicketLoading:false,
                buyTicketSuccess:false,
            }
        case BUY_TICKET_FAIL:
            return {
                buyTicketLoading:false,
                buyTicketError:action.payload,
            }

        default:
            return state
    }
}