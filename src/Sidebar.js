import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = ({ onClientClick, onDscClick, onBankClick, onOpenFilters }) => {
  const [open, setOpen] = useState(false);
  const [monthlyOpen, setMonthlyOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMonthlyClick = () => {
    setMonthlyOpen(!monthlyOpen);
  };

  const handleBankChannelClick = () => {
    onBankClick();
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        position: 'fixed',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: '64px',
          backgroundColor: '#616161',
        },
      }}
    >
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', backgroundColor: '#616161', color:'white', }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Reports" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={onClientClick}>
              <ListItemText primary="Client" />
            </ListItem>
            <ListItem button onClick={handleMonthlyClick} sx={{ pl: 4 }}>
              <ListItemText primary="Source" />
              {monthlyOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={monthlyOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button onClick={handleBankChannelClick} sx={{ pl: 8 }}>
                  <ListItemText primary="Bank Channel" />
                </ListItem>
                <ListItem button sx={{ pl: 8 }} onClick={onDscClick}>
                  <ListItemText primary="DSC Channel" />
                </ListItem>
                <ListItem button sx={{ pl: 8 }}>
                  <ListItemText primary="Others" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;


// import React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

// const Sidebar = ({ onMenuItemClick }) => {
//   const menuItems = [ 'Home','Manage users', 'Channels', 'Branches', 'Configure pricing ', 'invoice formats', 'Generate report'];
//   const logoutItem = 'Logout';

//   const handleListItemClick = (text) => {
//     onMenuItemClick(text);
//   };

//   return (
//     <Box
//       sx={{
//         width: 230,
//         backgroundColor: '#757575', 
//         color: 'white',
//         height: '100vh', 
//         paddingTop: '80px', 
//         position: 'absolute', 
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between', 
//         marginTop: '2.5px'
//       }}
//     >
//       <Box>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
//           <img
//             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_NEc8A16sOFBrLMoOcBUwFZlZ84A9UzfRw&s'
//             style={{
//               borderRadius: '50%',
//               height: '60px',
//               marginTop: '0px',
//               width: '60px',
//               marginLeft: '25px',
//               border: '3px solid white',
//               marginBottom: '-25px',
//             }}
//             alt='Profile'
//           />
//           <h4 style={{ textAlign: 'center' }}>Madhumathi</h4>
//         </Box>

//         <List sx={{ marginTop: '-30px' }}>
//           {menuItems.map((text, index) => (
//             <ListItemButton
//               key={index}
//               onClick={() => handleListItemClick(text)}
//               sx={{
//                 '&:hover': {
//                   backgroundColor: 'white',
//                   '& .MuiListItemText-root': {
//                     color: 'maroon',
//                   },
//                 },
//               }}
//             >
//               <ListItemText primary={text} sx={{ color: 'white' }} />
//             </ListItemButton>
//           ))}
//         </List>
//       </Box>

//       <List sx={{ width: '100%', mb: 0 }}>
//         <ListItemButton 
//           onClick={() => handleListItemClick(logoutItem)}
//           sx={{ 
//             '&:hover': {
//               width: '80%',
//               backgroundColor: 'white',
//               '& .MuiListItemText-root': {
//                 color: 'maroon',
//               },
//               '& .MuiSvgIcon-root': {
//                 color: 'maroon', 
//               },
//             },
//             justifyContent: 'flex-start',
//             paddingLeft: 9, 
//             paddingTop: '0px', // Adjusted margin top to move the button up
//             borderRadius: '12px', 
//             margin: '0 10px',
//             marginTop:'-100px',
//             backgroundColor: 'rgba(255, 255, 255, 0.1)', 
//           }}
//         >
//           <ArrowLeftIcon sx={{ color: 'white', xs: 0, marginLeft: '-15px' }} />
//           <ListItemText primary={logoutItem} sx={{ marginTop:'10px', color: 'white' }} />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;





// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import Collapse from '@mui/material/Collapse';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';

// const Sidebar = ({ onMenuItemClick, onClientClick, onDscClick, onBankClick }) => {
//   const [open, setOpen] = useState(false);
//   const [monthlyOpen, setMonthlyOpen] = useState(false);

//   const menuItems = ['Home', 'Manage users', 'Channels', 'Branches', 'Configure pricing', 'invoice formats'];
//   const logoutItem = 'Logout';

//   const handleListItemClick = (text) => {
//     onMenuItemClick(text);
//   };

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const handleMonthlyClick = () => {
//     setMonthlyOpen(!monthlyOpen);
//   };

//   const handleBankChannelClick = () => {
//     onBankClick();
//   };

//   return (
//     <Box
//       sx={{
//         width: 230,
//         backgroundColor: '#757575',
//         color: 'white',
//         height: '100vh',
//         paddingTop: '80px',
//         position: 'absolute',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         marginTop: '2.5px'
//       }}
//     >
//       <Box>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
//           <img
//             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_NEc8A16sOFBrLMoOcBUwFZlZ84A9UzfRw&s'
//             style={{
//               borderRadius: '50%',
//               height: '60px',
//               marginTop: '0px',
//               width: '60px',
//               marginLeft: '25px',
//               border: '3px solid white',
//               marginBottom: '-25px',
//             }}
//             alt='Profile'
//           />
//           <h4 style={{ textAlign: 'center' }}>Madhumathi</h4>
//         </Box>

//         <List sx={{ marginTop: '-30px' }}>
//           {menuItems.map((text, index) => (
//             <ListItemButton
//               key={index}
//               onClick={() => handleListItemClick(text)}
//               sx={{
//                 '&:hover': {
//                   backgroundColor: 'white',
//                   '& .MuiListItemText-root': {
//                     color: 'maroon',
//                   },
//                 },
//               }}
//             >
//               <ListItemText primary={text} sx={{ color: 'white' }} />
//             </ListItemButton>
//           ))}

//           {/* Reports Button with Nested List Items */}
//           <ListItemButton onClick={handleClick} sx={{ '&:hover': { backgroundColor: 'white', '& .MuiListItemText-root': { color: 'maroon' } } }}>
//             <ListItemText primary="Reports" sx={{ color: 'white' }} />
//             {open ? <ExpandLess /> : <ExpandMore />}
//           </ListItemButton>

//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItemButton sx={{ pl: 4 }} onClick={onClientClick}>
//                 <ListItemText primary="Client" sx={{ color: 'white' }} />
//               </ListItemButton>
//               <ListItemButton onClick={handleMonthlyClick} sx={{ pl: 4 }}>
//                 <ListItemText primary="Source" sx={{ color: 'white' }} />
//                 {monthlyOpen ? <ExpandLess /> : <ExpandMore />}
//               </ListItemButton>
//               <Collapse in={monthlyOpen} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   <ListItemButton onClick={handleBankChannelClick} sx={{ pl: 8 }}>
//                     <ListItemText primary="Bank Channel" sx={{ color: 'white' }} />
//                   </ListItemButton>
//                   <ListItemButton sx={{ pl: 8 }} onClick={onDscClick}>
//                     <ListItemText primary="DSC Channel" sx={{ color: 'white' }} />
//                   </ListItemButton>
//                   <ListItemButton sx={{ pl: 8 }}>
//                     <ListItemText primary="Others" sx={{ color: 'white' }} />
//                   </ListItemButton>
//                 </List>
//               </Collapse>
//             </List>
//           </Collapse>
//         </List>
//       </Box>

//       <List sx={{ width: '100%', mb: 0 }}>
//         <ListItemButton 
//           onClick={() => handleListItemClick(logoutItem)}
//           sx={{ 
//             '&:hover': {
//               width: '80%',
//               backgroundColor: 'white',
//               '& .MuiListItemText-root': {
//                 color: 'maroon',
//               },
//               '& .MuiSvgIcon-root': {
//                 color: 'maroon', 
//               },
//             },
//             justifyContent: 'flex-start',
//             paddingLeft: 9, 
//             paddingTop: '0px', 
//             borderRadius: '12px', 
//             margin: '0 10px',
//             marginTop: '-100px',
//             backgroundColor: 'rgba(255, 255, 255, 0.1)', 
//           }}
//         >
//           <ArrowLeftIcon sx={{ color: 'white', xs: 0, marginLeft: '-15px' }} />
//           <ListItemText primary={logoutItem} sx={{ marginTop: '10px', color: 'white' }} />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;

