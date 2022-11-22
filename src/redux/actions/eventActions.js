import api from "../../api"
import { CREATE_EVENT_COMPLETE, CREATE_EVENT_FAIL, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, DELETE_EVENT_FAIL, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, EVENT_DETAIL_FAIL, EVENT_DETAIL_REQUEST, EVENT_DETAIL_SUCCESS } from "../constants/eventConstants"

export const createEvent = (event) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_EVENT_REQUEST
        })
        const {data} = await api.post('/event/create', event)
        
        dispatch({
            type:CREATE_EVENT_SUCCESS,
            payload:data
        })

        dispatch({
            type:CREATE_EVENT_COMPLETE
        })

    } catch (error) {   
        console.log("ANother error", error)
        dispatch({
            type:CREATE_EVENT_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message[0]
            : error.message,
        })
    }
}

export const getEventDetail = (id) => async (dispatch) => {

    try {
        dispatch({
            type: EVENT_DETAIL_REQUEST
        })

        const { data } = await api.get(`/event/${id}`)
        // const { data } = await axios.get('http://localhost:8080/user/events',{"Authorization":`Bearer ${localStorage.getItem("userToken").token}`})

        dispatch({
            type: EVENT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error,"yo!!!, error");
        dispatch({
            type: EVENT_DETAIL_FAIL,
            payload: error.response
        })
    }
}

export const deleteEvent = (id) => async (dispatch) => {

    try {
        dispatch({
            type: DELETE_EVENT_REQUEST
        })

        const { data } = await api.delete(`/event/${id}`)
        // const { data } = await axios.get('http://localhost:8080/user/events',{"Authorization":`Bearer ${localStorage.getItem("userToken").token}`})
        console.log("yayaya", data)
        dispatch({
            type: DELETE_EVENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error,"yo!!!, error");
        dispatch({
            type: DELETE_EVENT_FAIL,
            payload: error.response
        })
    }
}