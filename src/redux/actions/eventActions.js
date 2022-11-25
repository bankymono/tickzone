import axios from "axios"
import api from "../../api"
import { BUY_TICKET_COMPLETE, BUY_TICKET_FAIL, BUY_TICKET_REQUEST, BUY_TICKET_SUCCESS, CLEAR_EVENT_DATA, CREATE_EVENT_COMPLETE, CREATE_EVENT_FAIL, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, DELETE_EVENT_FAIL, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, EVENT_DETAIL_FAIL, EVENT_DETAIL_REQUEST, EVENT_DETAIL_SUCCESS, GET_AVAILABLE_TICKETS_FAIL, GET_AVAILABLE_TICKETS_REQUEST, GET_AVAILABLE_TICKETS_SUCCESS, PUBLISHED_EVENT_LIST_FAIL, PUBLISHED_EVENT_LIST_REQUEST, PUBLISHED_EVENT_LIST_SUCCESS, PUBLISH_EVENT_COMPLETE, PUBLISH_EVENT_FAIL, PUBLISH_EVENT_REQUEST, PUBLISH_EVENT_SUCCESS, STORE_EVENT_ID, UPDATE_EVENT_COMPLETE, UPDATE_EVENT_FAIL, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS, UPLOAD_IMAGE_COMPLETE, UPLOAD_IMAGE_FAIL, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS } from "../constants/eventConstants"



export const storeEventId = (eventId) => (dispatch) => {
    dispatch({
        type:STORE_EVENT_ID,
        payload: eventId
    })
}

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

export const updateEvent = (id,event) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_EVENT_REQUEST
        })
        const {data} = await api.put(`/event/${id}`, event)
        
        dispatch({
            type:UPDATE_EVENT_SUCCESS,
            payload:data
        })

        dispatch({
            type:UPDATE_EVENT_COMPLETE
        })

    } catch (error) {   
        console.log("ANother error", error)
        dispatch({
            type:UPDATE_EVENT_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message[0]
            : error.message,
        })
    }
}

export const uploadEventImage = (id,imageUrl) => async (dispatch) => {
    try {
        dispatch({
            type: UPLOAD_IMAGE_REQUEST
        })
        const {data} = await api.put(`/event/${id}/upload`, imageUrl)
        
        dispatch({
            type: UPLOAD_IMAGE_SUCCESS,
            payload:data
        })

        dispatch({
            type:UPLOAD_IMAGE_COMPLETE
        })

    } catch (error) {   
        console.log("ANother error", error)
        dispatch({
            type:UPLOAD_IMAGE_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message[0]
            : error.message,
        })
    }
}

export const clearUserEvents = () => (dispatch) => {
    dispatch({
        type:CLEAR_EVENT_DATA,
    })
}

export const getEventDetail = (eventId) => async (dispatch) => {

    try {
        dispatch({
            type: EVENT_DETAIL_REQUEST
        })

        const { data } = await axios.get(`http://localhost:8080/event/user/${eventId}`,{"Content-Type":"application/json"})
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

export const publishEvent = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PUBLISH_EVENT_REQUEST
        })
        const {data} = await api.put(`/event/publish/${id}`)
        
        dispatch({
            type: PUBLISH_EVENT_SUCCESS,
            payload:data
        })

        dispatch({
            type:PUBLISH_EVENT_COMPLETE
        })

    } catch (error) {   
        console.log("ANother error", error)
        dispatch({
            type:PUBLISH_EVENT_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message[0]
            : error.message,
        })
    }
}

export const getPublishedEvents = () => async (dispatch) => {

    try {
        dispatch({
            type: PUBLISHED_EVENT_LIST_REQUEST
        })

        const { data } = await axios.get('http://localhost:8080/event/published',{"Content-Type":"application/json"})
        // const { data } = await axios.get('http://localhost:8080/user/events',{"Authorization":`Bearer ${localStorage.getItem("userToken").token}`})

        dispatch({
            type: PUBLISHED_EVENT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response,"yo, error");
        dispatch({
            type: PUBLISHED_EVENT_LIST_FAIL,
            payload: error.response
        })
    }
}

export const getAvailableTickets = (id) => async (dispatch) => {

    try {
        dispatch({
            type: GET_AVAILABLE_TICKETS_REQUEST
        })

        const { data } = await axios.get(`http://localhost:8080/ticket/${id}/available`,{"Content-Type":"application/json"})
        // const { data } = await axios.get('http://localhost:8080/user/events',{"Authorization":`Bearer ${localStorage.getItem("userToken").token}`})

        dispatch({
            type: GET_AVAILABLE_TICKETS_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response,"yo, error");
        dispatch({
            type: GET_AVAILABLE_TICKETS_FAIL,
            payload: error.response
        })
    }
}

export const buyTicket = (id) => async (dispatch) => {
    try {
        dispatch({
            type: BUY_TICKET_REQUEST
        })
        const {data} = await axios.put(`http://localhost:8080/ticket/${id}/buy`,{"Content-Type":"application/json"})
        
        dispatch({
            type: BUY_TICKET_SUCCESS,
            payload:data
        })

        dispatch({
            type:BUY_TICKET_COMPLETE
        })

    } catch (error) {   
        console.log("ANother error", error)
        dispatch({
            type:BUY_TICKET_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message[0]
            : error.message,
        })
    }
}