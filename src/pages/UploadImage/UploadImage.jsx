import React from 'react';
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo';
import './UploadImage.css';
import placeholder_four from '../../assets/placeholder_four.png'
import {BsChevronLeft} from 'react-icons/bs'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearUserEvents, uploadEventImage } from '../../redux/actions/eventActions';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const UploadImage = ({history}) => {
    const [image,setImage] = useState('');
    const dispatch = useDispatch();


    const uploadedImage = useSelector(state => state.uploadedImage);
    const { imageData, imageSuccess, imageLoading, imageError } = uploadedImage;

    const globalEventId = useSelector(state => state.globalEventId)
    const {theEventId} = globalEventId;

    const handleImageChange = (e) => {
        if(e.target.files){
            encodeFileToBase64(e.target.files[0])
            .then(result =>{
                setImage(result);
            })
        }
    }

    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject)=> {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }

    const uploadImage = async () => {
        await dispatch(uploadEventImage(theEventId, image))
        
        history.push("/events-dashboard")
    }

    useEffect(()=>{
        if(imageData) {
            history.push("/events-dashboard")
        }
    },[imageData,history])


  return (
    <div className='upload-image-dashboard'>

        <Link to="/events-dashboard" className='link-to-crt-evt'>
                <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
                <SideBarTwo />
            </Link>

        <div className='upload-image-container'>
            <div className='upload-image-card'>
                <div className='upload-img-heading'>Upload Event Image / Poster</div>
                <input id="evt-image-input" className='evt-img-upload-input' value="" onChange={(e)  => handleImageChange(e)} type="file" accept="image/png, image/jpeg, image/jpg" />
                {console.log(image)}
                <label htmlFor='evt-image-input' className='image-wrapper' >
                    {

                        image ? 
                            <img src={image} alt="upload" className='upload-img-image' />                        
                        :
                            <img src={placeholder_four} alt="upload" className='upload-img-image' />
                    }

                </label>
                <button onClick={uploadImage} className='upload-img-save-btn'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default UploadImage