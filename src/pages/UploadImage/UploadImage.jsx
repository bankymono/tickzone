import React from 'react';
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo';
import './UploadImage.css';
import upload_image from '../../assets/upload-img.png'
import {BsChevronLeft} from 'react-icons/bs'

const UploadImage = () => {
  return (
    <div className='upload-image-dashboard'>
        <div>
            <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
            <SideBarTwo />
        </div>

        <div className='upload-image-container'>
            <div className='upload-image-card'>
                <div className='upload-img-heading'>Upload Event Image / Poster</div>
                <button className='image-wrapper'>
                    <img src={upload_image} alt="upload" />
                </button>
                <button className='upload-img-save-btn'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default UploadImage