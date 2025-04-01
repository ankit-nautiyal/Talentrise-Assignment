import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';


function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'purple'}}>
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, display: "flex" }}>
            <img src="profile-pic.jpg" alt="profile-pic" style={{height: '50px', width: '50px', marginTop:'25px', borderRadius: '50px'}}/>
            <br />

            <div style={{marginLeft: '5px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                <p style={{ marginBottom:'0px'}}>Hello, Welcome 🎉</p> 
                <strong style={{ marginTop:'0px'}}>  John Weak</strong>
            </div>
            </Typography>
            <IconButton color="inherit">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v13q-10 20-15 42t-5 45q0 83 58.5 141.5T720-520v240h80v80H160Zm560-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
            </IconButton>
        </Toolbar>
        </AppBar>
    );
}

export default Header;