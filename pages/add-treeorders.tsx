import React, { useState } from 'react';
import style from '../src/custom/Customize.module.css';
import axios from 'axios';
import { data } from 'cypress/types/jquery';

function addtreeorders() {
    const [dates, setDates]=useState('');
    const [clientTitle, setClientTitle]=useState('');
    const [logo, setLogo]=useState('');
    const [Propagules, setPropagules]=useState('');
    const [Latitude, setLatitude]=useState('');
    const [Longitude, setLongitude]=useState('');
    const [video, setVideo]=useState('');
    const [Client, setClient]=useState('');
    const [Planted, setPlanted]=useState('');

    const handelsubmit=()=>{
    const Data = {
        dates:dates,
        clientTitle:clientTitle,
        logo:logo,
        Propagules: parseFloat(Propagules),
        Latitude:parseFloat(Latitude),
        Longitude:parseFloat(Longitude),
        video:video,
        Client:Client,
        Planted:parseFloat(Planted)
    };
 axios.post(`/api/app/addproject`, Data)
    .then(res=>{
         setDates('');
         setClientTitle('');
         setLogo('');
         setPropagules('');
         setLatitude('');
         setLongitude('');
         setVideo('');
         setClient('');
         setPlanted('');
    })
    .catch(err=>{
        alert('not add')
    })
    };
  return (
    <div className={style.addtreeform}>
<div className={style.addtreeform2}>
<label>Request Date</label>
<input type="text" 
value={dates} onChange={e=>setDates(e.target.value)} /> <br />
<label>Client Title</label>
<input type="text" 
value={clientTitle} onChange={e=>setClientTitle(e.target.value)} />
<label>Logo</label>
<input type="text" 
value={logo} onChange={e=>setLogo(e.target.value)} />
<label>Number of Propagules</label>
<input type="number" 
value={Propagules} onChange={e=>setPropagules(e.target.value)} />
<label>Latitude</label>
<input type="number" 
value={Latitude} onChange={e=>setLatitude(e.target.value)} />
<label>Longitude</label>
<input type="number" 
value={Longitude} onChange={e=>setLongitude(e.target.value)} />
<label>Thank you video</label>
<input type="text" 
value={video} onChange={e=>setVideo(e.target.value)} />
<label>Client</label>
<input type="text" 
value={Client} onChange={e=>setClient(e.target.value)} />
<label>Total Planted</label>
<input type="number" 
value={Planted} onChange={e=>setPlanted(e.target.value)} />

<button onClick={handelsubmit}>Submit</button>
    </div></div>
  )
}

export default addtreeorders