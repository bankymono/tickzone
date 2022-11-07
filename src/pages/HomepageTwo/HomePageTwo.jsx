import React from 'react';
import "./HomePageTwo.css";
// import {BsChevronDown} from "react-icons/bs"

import TopEvent from '../../components/TopEvent/TopEvent';
import EventsList from '../../components/EventsList/EventsList';

const HomePageTwo = () => {
  return (
    <div className='homepage-container'>
        <TopEvent />
        <EventsList />
    </div>
  )
}

export default HomePageTwo