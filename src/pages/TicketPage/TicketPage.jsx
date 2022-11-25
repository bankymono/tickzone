import React from 'react'
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import "./TicketPage.css"
import placeholder_four from "../../assets/placeholder_four.png"
import QRCode from 'qrcode';
import jsPdf from 'jspdf'
import { useEffect } from 'react';

const TicketPage = () => {
  const [ticketInfo, setTicketInfo] = useState(JSON.parse(localStorage.getItem("boughtTicket")))
  const [buyerInfo, setBuyerInfo] = useState(JSON.parse(localStorage.getItem("buyerInfo")))
    const buyTicketInfo = useSelector(state => state.buyTicketInfo);
    const {buyTicketData,buyTicketLoading,buyTicketSuccess,buyTicketError} = buyTicketInfo;

    const userTicket = useRef();

    const [url, setUrl] = useState('');
    const [qrcode, setQrcode] = useState('');

    const GenerateQRCode = () => {
      QRCode.toDataURL(ticketInfo.uniqueCode,{
        width:800,
        margin:1
      },(err,url) => {
        if(err) return console.log(err)
  
        console.log();
        setQrcode(url);

      })
    }

    const generatePdf = () => {
      var doc = new jsPdf('p','pt',[800,595]);
      doc.html(userTicket.current,{
        callback:function(pdf) {
          pdf.save(`${buyerInfo.firstName}_${buyerInfo.lastName}.pdf`)
        }
      })
    }

    useEffect(() => {
      GenerateQRCode()
    })

  return (
    <div className='ticket-container'>
      {console.log(ticketInfo)}
      <div className='ticket-info-and-qr' ref={userTicket}>
        <div className='ticket-item'>
          <div className='ticket-info-field'>
            <div>Name : </div>
            <div>{buyerInfo.firstName + " " + buyerInfo.lastName}</div>
          </div>

          <div className='ticket-info-field'>
            <div>Email : </div>
            <div>{buyerInfo.email}</div>
          </div>

          <div className='ticket-info-field'>
            <div>Event Name : </div>
            <div>{ticketInfo.event.eventName}</div>
          </div>
          <div className='ticket-disclaimer'>This ticket admits only one*</div>
        </div>
        {qrcode && <img className='ticket-qrcode' src={qrcode} alt="ramd" />}        
      </div>

      <button onClick={() => generatePdf()} className='ticket-download-btn'>Download</button>

    </div>
  )
}

export default TicketPage