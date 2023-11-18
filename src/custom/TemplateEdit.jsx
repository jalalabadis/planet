import React, {useState, useEffect, useRef} from 'react';
import style from './Customize.module.css';
import {getStorage, ref as ref_storage, uploadBytes, getDownloadURL} from  "firebase/storage";
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function TemplateEdit() {
const iframeRef = useRef();
const db = getDatabase();
const storage = getStorage();
const [navData, setNavData]=useState([]);
const [sidebarData, setSidebarData]=useState([]);
const [mapsData, setMapsData]=useState([]);
const [database, setDatabase]=useState([]);
const [isExpanded, setIsExpanded] = useState(false);
const [dbconnectStatus, setDbconnectStatus]=useState('Check');

///UseEffect
useEffect(()=>{
    onValue(ref(db, 'Admin'), snapshot=>{
  if(snapshot.exists()){
    setNavData(snapshot.val().Navbar);
    setSidebarData(snapshot.val().SidebarData);
    setMapsData(snapshot.val().MapsData);
    setDatabase(snapshot.val().Database);
  }
    });
    },[]);


///Image change Upload
const handleFileChange = (e) => {
    const storageRef = ref_storage(storage, 'Theme/logo');
    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        update(ref(db, 'Admin/Navbar'), {
            logo: url
        });
      })
    });
};

 ////Update navData info
 const handelnavData=(e)=>{
    update(ref(db, 'Admin/Navbar'), e);
  };

   ////Update SearchbarData info
 const handelsidebarData=(e)=>{
    update(ref(db, 'Admin/SidebarData'), e);
  };

     ////Update Maps info
 const handelmapsData=(e)=>{
    update(ref(db, 'Admin/MapsData'), e);
  };

       ////Update Database info
 const handelDatabase=(e)=>{
    update(ref(db, 'Admin/Database'), e);
    setDbconnectStatus('reconnect');
  };

  /////Database update check
  const handeldbconnectStatus=()=>{
axios.get(`/api/database/reconnect`)
.then(response=>{
setDbconnectStatus('Connect');
})
.catch(err=>{
    setDbconnectStatus('reconnect');
})
  };
  return (
    <>
    <div className={style.sidebar}>
        <div className={`${style.collapseParent}`}>
            <h3 onClick={e=>setIsExpanded(isExpanded==="navbar"?false:"navbar")}
            className={`${style.collapseArrow} ${isExpanded==="navbar"?style.expandedarrow:""}`}>Navbar  
            <FontAwesomeIcon icon={faChevronDown} /></h3>
            <div className={`${style.collapseContent}  ${isExpanded==="navbar"?style.expanded:""}`}>
                <div className={style.collapseItem}>
                    <span>Logo</span><br />
                    <label>
                    <input type="file" style={{display:'none'}} onChange={handleFileChange} />
                    <img src={navData.logo} alt="logo"/>
                        </label>
                    
                    <br />
                    <span>Home Url</span><br />
                    <input type="text" 
                    value={navData.home} 
                    onChange={e=> handelnavData({home: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>Aboutus Url</span><br />
                    <input type="text"
                    value={navData.about} 
                    onChange={e=> handelnavData({about: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>overview Url</span><br />
                    <input type="text"
                    value={navData.overview} 
                    onChange={e=> handelnavData({overview: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>childrenAndYouth Url</span><br />
                    <input type="text"
                    value={navData.childrenAndYouth} 
                    onChange={e=> handelnavData({childrenAndYouth: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>trillionTrees Url</span><br />
                    <input type="text"
                    value={navData.trillionTrees} 
                    onChange={e=> handelnavData({trillionTrees: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>yucatan Url</span><br />
                    <input type="text"
                    value={navData.yucatan} 
                    onChange={e=> handelnavData({yucatan: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>partners Url</span><br />
                    <input type="text"
                    value={navData.partners} 
                    onChange={e=> handelnavData({partners: e.target.value})} 
                    placeholder="Type here.."/>

<br />
                    <span>changeChocolate Url</span><br />
                    <input type="text"
                    value={navData.changeChocolate} 
                    onChange={e=> handelnavData({changeChocolate: e.target.value})} 
                    placeholder="Type here.."/>

                    <br />
                    <span>stopTalkingStartPlanting Url</span><br />
                    <input type="text"
                    value={navData.stopTalkingStartPlanting} 
                    onChange={e=> handelnavData({stopTalkingStartPlanting: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>Leaders Url</span><br />
                    <input type="text" 
                    value={navData.leaderboard} 
                    onChange={e=> handelnavData({leaderboard: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>Shop Url</span><br />
                    <input type="text" 
                    value={navData.shop} 
                    onChange={e=> handelnavData({shop: e.target.value})} 
                    placeholder="Type here.."/>
                   <br />
                    <span>Background Color</span><br />
                    <input type="color"  
                    value={navData.background} 
                    onChange={e=> handelnavData({background: e.target.value})} 
                    ></input>
                    <br />
                    <span>Text Color</span><br />
                    <input type="color"
                    value={navData.textcolor} 
                    onChange={e=> handelnavData({textcolor: e.target.value})} ></input>
                    <br />
                    <span>Text Color Active</span><br />
                    <input type="color" 
                    value={navData.textcolorActive} 
                    onChange={e=> handelnavData({textcolorActive: e.target.value})}></input>
                    <br />
                    <span>Icon Color</span><br />
                    <input type="color" 
                    value={navData.iconcolor} 
                    onChange={e=> handelnavData({iconcolor: e.target.value})}></input>

                </div>
            </div>
        </div>

        <div className={`${style.collapseParent}`}>
            <h3 onClick={e=>setIsExpanded(isExpanded==="sidebar"?false:"sidebar")}
            className={`${style.collapseArrow} ${isExpanded==="sidebar"?style.expandedarrow:""}`}>Sidebar 
            <FontAwesomeIcon icon={faChevronDown} /></h3>
            <div className={`${style.collapseContent}  ${isExpanded==="sidebar"?style.expanded:""}`}>
                <div className={style.collapseItem}>
                    <span>Title</span><br />
                    <input type="text" 
                    value={sidebarData?.home} 
                    onChange={e=> handelsidebarData({home: e.target.value})} 
                    placeholder="Type here.."/>
                    <br />
                    <span>Background Color</span><br />
                    <input type="color"  
                    value={sidebarData?.background} 
                    onChange={e=> handelsidebarData({background: e.target.value})} 
                    ></input>
                    <br />
                    <span>Text Color</span><br />
                    <input type="color"
                    value={sidebarData?.textcolor} 
                    onChange={e=> handelsidebarData({textcolor: e.target.value})} ></input>
                    <br />
                    <span>Icon Color</span><br />
                    <input type="color" 
                    value={sidebarData?.iconcolor} 
                    onChange={e=> handelsidebarData({iconcolor: e.target.value})}></input>

                </div>
            </div>
        </div>

        <div className={`${style.collapseParent}`}>
            <h3 onClick={e=>setIsExpanded(isExpanded==="maps"?false:"maps")}
            className={`${style.collapseArrow} ${isExpanded==="maps"?style.expandedarrow:""}`}>Map 
            <FontAwesomeIcon icon={faChevronDown} /></h3>
            <div className={`${style.collapseContent}  ${isExpanded==="maps"?style.expanded:""}`}>
                <div className={style.collapseItem}>
                   
                    <span>Background Color</span><br />
                    <input type="color"  
                    value={mapsData?.background} 
                    onChange={e=> handelmapsData({background: e.target.value})} 
                    ></input>
                    <br />
                    <span>Mark Color</span><br />
                    <input type="color"
                    value={mapsData?.markcolor} 
                    onChange={e=> handelmapsData({markcolor: e.target.value})} ></input>
                    <br />
                    <span>Mark Active Color</span><br />
                    <input type="color"
                    value={mapsData?.markcoloractive} 
                    onChange={e=> handelmapsData({markcoloractive: e.target.value})} ></input>
                    <br />
                    <span>Text Color</span><br />
                    <input type="color"
                    value={mapsData?.textcolor} 
                    onChange={e=> handelmapsData({textcolor: e.target.value})} ></input>
                    <br />
                    <span>Popup Background</span><br />
                    <input type="color" 
                    value={mapsData?.popupbg} 
                    onChange={e=> handelmapsData({popupbg: e.target.value})}></input>
                      <br />
                    <span>Status Url</span><br />
                    <input type="text" 
                    value={mapsData?.Status} 
                    onChange={e=> handelmapsData({Status: e.target.value})} 
                    placeholder="Type here.."/>
                       <br />
                    <span>imprint Url</span><br />
                    <input type="text" 
                    value={mapsData?.imprint} 
                    onChange={e=> handelmapsData({imprint: e.target.value})} 
                    placeholder="Type here.."/>

<br />
                    <span>privacy Url</span><br />
                    <input type="text" 
                    value={mapsData?.privacy} 
                    onChange={e=> handelmapsData({privacy: e.target.value})} 
                    placeholder="Type here.."/>

              <br />
                    <span>terms Url</span><br />
                    <input type="text" 
                    value={mapsData?.terms} 
                    onChange={e=> handelmapsData({terms: e.target.value})} 
                    placeholder="Type here.."/>

                       <br />
                    <span>contact Url</span><br />
                    <input type="text" 
                    value={mapsData?.contact} 
                    onChange={e=> handelmapsData({contact: e.target.value})} 
                    placeholder="Type here.."/>   
                </div>
            </div>
        </div>

        <div className={`${style.collapseParent}`}>
            <h3 onClick={e=>setIsExpanded(isExpanded==="database"?false:"database")}
            className={`${style.collapseArrow} ${isExpanded==="database"?style.expandedarrow:""}`}>Database 
            <FontAwesomeIcon icon={faChevronDown} /></h3>
            <div className={`${style.collapseContent}  ${isExpanded==="database"?style.expanded:""}`}>
                <div className={style.collapseItem}>
                   
                <span>Your MongoDB Url</span><br />
                    <input type="text" 
                    value={database?.url} 
                    onChange={e=> handelDatabase({url: e.target.value})} 
                    placeholder="Type here.."/>

                </div>

                <button onClick={handeldbconnectStatus}>{dbconnectStatus}</button>
            </div>
        </div>
    </div>

    <div className={style.iframeContainer}>
        <iframe ref={iframeRef} src="/" title='view'></iframe>
    </div>

    </>
  )
}

export default TemplateEdit