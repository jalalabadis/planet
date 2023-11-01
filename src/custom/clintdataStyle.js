import styled from 'styled-components';
const clintdatabase = typeof localStorage !== 'undefined' ? localStorage.getItem('clintData') : null;
export const ClintSideDataJSON = JSON.parse(clintdatabase);
export const navData = ClintSideDataJSON?.Navbar;
export const sidebarsTitles = ClintSideDataJSON?.SidebarData.home;
////////////////////////////////Styled/////////
export const NavbarWrap = styled.div`
.unactive_icon{
  color: ${ClintSideDataJSON?.Navbar?.textcolor};
}
p.active_icon {
  color: ${ClintSideDataJSON?.Navbar?.textcolorActive};
}

.link_icon > svg > path {
  fill: ${ClintSideDataJSON?.Navbar?.iconcolor};
}
.link_icon.active_icon > svg > path {
  fill: ${ClintSideDataJSON?.Navbar?.textcolorActive};
}
&:hover {
  cursor: pointer;
  color: ${ClintSideDataJSON?.Navbar?.textcolorActive};

}
`;

export const SidebaertWrap = styled.div`

.header {
  background: ${ClintSideDataJSON?.SidebarData?.background};
  color: ${ClintSideDataJSON?.SidebarData?.textcolor};
}
.projectsContainer{
  background: ${ClintSideDataJSON?.SidebarData?.background};;
 
}

.projectsContainer .singleProject .projectInfo .projectData .target{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor};
}
.projectsContainer .singleProject .projectInfo .projectData .projectTPOName{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor};
}

.projectsContainer .singleProject .projectInfo .projectCost .perUnitCost{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor};
}
svg{
  fill:${ClintSideDataJSON?.SidebarData?.iconcolor};
}
`;

export const ContainerbaertWrap = styled.div`
.projectSnippetContainer {
  background: ${ClintSideDataJSON?.SidebarData?.background};
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}
.projectsContainer{
  background: ${ClintSideDataJSON?.SidebarData?.background};
 
}

.singleProject .projectInfo .projectData .projectTPOName{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}
.singleProject .projectInfo .projectData .target{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}

.singleProject .projectInfo .projectCost .perUnitCost{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}
.singleProjectDetails{
  background: ${ClintSideDataJSON?.SidebarData?.background};
}
.projectCompleteInfo .projectDescription{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}
.projectCompleteInfo .projectDescription .infoTitle{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}
.ProjectDetails_infoTitle__JD_lk{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}


.ProjectDetails_infoText__Rra0n{
  color: ${ClintSideDataJSON?.SidebarData?.textcolor}
}

svg path{
  fill: ${ClintSideDataJSON?.SidebarData?.iconcolor}
}
`;


export const MapDataWrap = styled.div`
background-color: ${ClintSideDataJSON?.MapsData?.background};

.ProjectsMap_marker__yzao6{
  background: ${ClintSideDataJSON?.MapsData?.markcolor};
}
.ProjectsMap_conservationMarker__Nad8j{
  background: ${ClintSideDataJSON?.MapsData?.markcoloractive};
}

.ProjectsMap_exploreButton__dYOQ8{
  background: ${ClintSideDataJSON?.MapsData?.popupbg};
}
.ProjectsMap_exploreText__2ef0A{
  color: ${ClintSideDataJSON?.MapsData?.textcolor}
}
`;



export const MapDataProp = styled.div`
background-color: ${ClintSideDataJSON?.MapsData?.popupbg};

.target{
  color:  ${ClintSideDataJSON?.MapsData?.textcolor}
}
.perUnitCost{
  color:  ${ClintSideDataJSON?.MapsData?.textcolor}
}

.projectTPOName{
  color:  ${ClintSideDataJSON?.MapsData?.textcolor}
}

`;