import React from 'react';
import "./HomePageTwo.css";
// import {BsChevronDown} from "react-icons/bs"

import TopEvent from '../../components/TopEvent/TopEvent';
import EventsList from '../../components/EventsList/EventsList';
import { Banner } from '../../components/Banner/Banner';

const HomePageTwo = () => {
  return (
    <div className='homepage-container'>
        {/* <TopEvent /> */}
        <Banner />
        <EventsList />
    </div>
  )
}

export default HomePageTwo