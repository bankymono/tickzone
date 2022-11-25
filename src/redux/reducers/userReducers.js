import { CLEAR_EVENT_DATA } from "../constants/eventConstants"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, USER_EVENTS_LIST_FAIL, USER_EVENTS_LIST_REQUEST, USER_EVENTS_LIST_SUCCESS, USER_REGISTER_COMPLETE, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"


export const userRegisterReducer = (state={userSuccess:false}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {
                userLoading:true
            }
        case USER_REGISTER_SUCCESS:
            return {
                userLoading:false,
                userSuccess:true,
                user:action.payload
            }
        case USER_REGISTER_COMPLETE:
            return {
                userLoading:false,
                userSuccess:false,
            }
        case USER_REGISTER_FAIL:
            return {
                userLoading:false,
                userError:action.payload,
            }

        default:
            return state
    }
}


export const loginReducer = (state={}, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return { loading:true }

        case LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload}

        case LOGIN_FAIL:
            return { loading:false, error: action.payload}


        case LOGOUT:
            return {}
        default:
                return state;

    }
}

export const userEventsReducer = (state = { userEventsList: {}, userEventsLoading: true }, action) => {
    switch (action.type) {
        case USER_EVENTS_LIST_REQUEST:
            return { userEventsLoading: true, userEventsList: {} }
        case USER_EVENTS_LIST_SUCCESS:
            return { userEventsLoading: false, userEventsList: action.payload }
        case USER_EVENTS_LIST_FAIL:
            return { userEventsLoading: false, userEventsError: action.payload }
      
        default:
            return state;
    }
}
