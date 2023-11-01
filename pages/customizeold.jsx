import React, { useEffect, useState } from 'react';
import Style from "../src/custom/Customize.module.css";
import axios from 'axios';
import navData from '../src/custom/JSON/navData.json';

function Customize() {
  const [customData, setCustomData]=useState([]);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


///Image change
  const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result.split(',')[1];
      setFile(base64String);
      console.log(base64String)
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(()=>{
    setCustomData(navData);
  },[]);
   
  ////
  const handelsubmitData=()=>{
    axios.post('/api/database/customdata', customData)
    .then(res=>{
  console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    });
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/database/uploadfiles', file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setImageUrl(response.data.imageUrl);
        alert('File uploaded successfully');
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className={Style.tevareas}>
 <h1>Customize Template</h1>

<input value={customData.home} onChange={e=>setCustomData({ ...customData, home: e.target.value })}/>
<input value={customData.background} onChange={e=>setCustomData({ ...customData, background: e.target.value })}/>

<button onClick={handelsubmitData}>Update</button>


      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type='submit'>Upload File</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Updated Image" />}
    </div>
  )
}

export default Customize;
