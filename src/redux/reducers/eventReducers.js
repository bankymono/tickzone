import { 
    CREATE_EVENT_COMPLETE, 
    CREATE_EVENT_FAIL, 
    CREATE_EVENT_REQUEST, 
    CREATE_EVENT_SUCCESS, 
    DELETE_EVENT_FAIL, 
    DELETE_EVENT_REQUEST, 
    DELETE_EVENT_SUCCESS, 
    EVENT_DETAIL_FAIL, 
    EVENT_DETAIL_REQUEST,
    EVENT_DETAIL_SUCCESS} from "../constants/eventConstants"

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