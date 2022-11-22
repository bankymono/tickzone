
import axios from 'axios';
import api from '../../api';

import { 
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_COMPLETE,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGOUT,
    USER_EVENTS_LIST_REQUEST,
    USER_EVENTS_LIST_SUCCESS,
    USER_EVENTS_LIST_FAIL
    } from "../constants/userConstants";
    


export const registerUser = (user) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const {data} = await api.post('/user/register', user)
        
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type:USER_REGISTER_COMPLETE
        })

    } catch (error) {

        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message[0]
            : error.message,
        })
    }
}


export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:LOGIN_REQUEST
        })

        const {data} = await api.post('/authenticate',{email, password})
        dispatch({
            type: LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userToken', JSON.stringify(data))
        
    } catch (error) {
        console.log(error, "ayeraye")
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userToken');
    dispatch({
        type:LOGOUT
    })
}

export const getUserEvents = () => async (dispatch) => {

    try {
        dispatch({
            type: USER_EVENTS_LIST_REQUEST
        })

        const { data } = await api.get('/user/events')
        // const { data } = await axios.get('http://localhost:8080/user/events',{"Authorization":`Bearer ${localStorage.getItem("userToken").token}`})

        dispatch({
            type: USER_EVENTS_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error,"yo, error");
        dispatch({
            type: USER_EVENTS_LIST_FAIL,
            payload: error.response
        })
    }
}