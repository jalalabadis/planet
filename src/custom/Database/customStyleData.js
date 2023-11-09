import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { getDatabase } from 'firebase/database';
import { createUseStyles } from 'react-jss';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const usecustomStyleData = () => {
  const db = getDatabase();
  const [navbar, setNavbar] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  const [maps, setMaps] = useState([]);
  const [Database, setDatabase]=useState();


  useEffect(() => {
/////Set To Local Data 
const clintdatabase = localStorage.getItem('clintData');
const ClintSideDataJSON = JSON.parse(clintdatabase);
setNavbar(ClintSideDataJSON?.Navbar);
setSidebar(ClintSideDataJSON?.SidebarData); 
setMaps(ClintSideDataJSON?.MapsData);

///////////////////Firebase
  onAuthStateChanged(auth, user=>{
    if(user){
      console.log(user.uid);
    }
  });
 ///Set To DataBase   
const NavbarListener = onValue(ref(db, 'Admin'), (snapshot) => {
  if(snapshot.exists()){
    setNavbar(snapshot.val().Navbar);
    setSidebar(snapshot.val().SidebarData);
    setMaps(snapshot.val().MapsData);
    setDatabase(snapshot.val().Database);
    localStorage.setItem('clintData', JSON.stringify(snapshot.val()));
}
});
return () => {NavbarListener();};
 }, [db]);

 const CustomStyleData = createUseStyles({
NavbarStyle: {
      '& .subMenuItems':{
      background: navbar?.background,
      color: navbar?.textcolor
      },
      '& .menuText':{
        color: navbar?.textcolor
        },
      '& .unactive_icon':{
      color: navbar?.textcolor
       },
     '& .active_icon': {
      color: navbar?.textcolorActive
       },

    '& .link_icon > svg > path': {
          fill: navbar?.iconcolor
        },
    '& :hover .link_icon > svg > path': {
          fill: navbar?.textcolorActive
        },
    '& .link_icon.active_icon > svg > path': {
          fill: navbar?.textcolorActive
        },

    

        '& .link_icon > svg > g> path': {
          fill: navbar?.iconcolor
        },
    '& .menuText:hover .link_icon > svg > g> path': {
          fill: navbar?.textcolorActive
        },
     '& :hover p': {
      color: navbar?.textcolorActive
    },
},
SidebarStyle:{
  '& .header': {
    background: navbar?.textcolor,
    color: sidebar?.textcolor
  },
  '& .projectsContainer': {
    background: sidebar?.background
   
  },
  '& .projectsContainer .singleProject .projectInfo .projectData .target': {
    color: sidebar?.textcolor
  },
  '& .projectsContainer .singleProject .projectInfo .projectData .projectTPOName': {
    color: sidebar?.textcolor
  },
  
  '& .projectsContainer .singleProject .projectInfo .projectCost .perUnitCost': {
    color: sidebar?.textcolor
  },
 '& svg': {
    fill: sidebar?.iconcolor
  }
},
SingleSidebarStyle:{
  '& .projectSnippetContainer': {
    background: sidebar?.background,
    color: sidebar?.textcolor
  },
  '& .projectsContainer': {
    background: sidebar?.background
   
  },
  
  '& .singleProject .projectInfo .projectData .projectTPOName': {
    color: sidebar?.textcolor
  },
  
  '& .singleProject .projectInfo .projectData .target': {
    color: sidebar?.textcolor},
  
  '& .singleProject .projectInfo .projectCost .perUnitCost':{
    color: sidebar?.textcolor},
  
  '& .singleProjectDetails': {
    background: sidebar?.background
  },
  '& .projectCompleteInfo .projectDescription':{
    color: sidebar?.textcolor},
    
  '& .projectCompleteInfo .projectDescription .infoTitle': {
    color: sidebar?.textcolor},
  
  '& .ProjectDetails_infoTitle__JD_lk':{
    color: sidebar?.textcolor},
  
  
  '& .ProjectDetails_infoText__Rra0n':{
    color: sidebar?.textcolor},
  
  '& svg path': { 
    fill: sidebar?.iconcolor}
},
MapsStyle: {
  background: maps?.background,

  '& .ProjectsMap_marker__yzao6': {
  background: maps?.markcolor
},
  '& .ProjectsMap_conservationMarker__Nad8j': {
  background: maps?.markcoloractive,
},

  '& .ProjectsMap_exploreButton__dYOQ8':{
  background: maps?.popupbg
},
 ' & .ProjectsMap_exploreText__2ef0A':{
  color: maps?.textcolor}
},

MapsPropStyle: {
  background: 'blue',
'& .target':{
  color:  maps?.textcolor
},
'& .perUnitCost':{
  color:  maps?.textcolor
},

'& .projectTPOName':{
  color:  maps?.textcolor
}
}

  });

  return {CustomStyleData,  navbar, sidebar, maps, Database}; 
};

export default usecustomStyleData;