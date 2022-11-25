import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer, userEventsReducer, userRegisterReducer } from './reducers/userReducers';
import { availableTicketsReducer, buyTicketReducer, createEventReducer, deleteEventReducer, eventDetailReducer, publishedEventsReducer, publishEventReducer, storeEventIdReducer, updateEventReducer, uploadEventImageReducer } from './reducers/eventReducers';
import { createTicketsReducer, eventTicketsReducer } from './reducers/ticketReducers';

const reducer = combineReducers({
    globalEventId:storeEventIdReducer,
    userRegister:userRegisterReducer,
    userLogin:loginReducer,
    userEvents:userEventsReducer,
    eventCreated:createEventReducer,
    eventUpdated:updateEventReducer,
    uploadedImage:uploadEventImageReducer,
    eventDetail:eventDetailReducer,
    deletedEvent:deleteEventReducer,
    publishedEvent:publishEventReducer,
    eventTickets:eventTicketsReducer,
    ticketsCreated:createTicketsReducer,
    publishedEvents:publishedEventsReducer,
    availableTickets:availableTicketsReducer,
    buyTicketInfo:buyTicketReducer
});

const userInfoFromStorage = localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')):null;

const middleware = [thunk];

const initialState = {
    userLogin:{ userInfo:userInfoFromStorage },
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;