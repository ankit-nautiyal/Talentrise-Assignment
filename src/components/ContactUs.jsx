import React from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../style.css';

function ContactUs() {
    return (
        <Container className="page-container">
            <Typography variant="h5" gutterBottom>
            Contact us
            </Typography>
            
            <Box display="flex" flexDirection='column'   alignItems="start" mb={2} >
                <span style={{display: 'flex', marginBottom: '0px'}}>
                    <EmailIcon sx={{ mr: 1 }} /> 
                    <Typography > <b>Email</b></Typography>
                </span>
                <p style={{marginTop: '0px'}}>workforeign@gmail.com</p>
            </Box>

            <Box display="flex" flexDirection='column'   alignItems="start" mb={2} >
                <span style={{display: 'flex', marginBottom: '0px'}}>
                    <PhoneIcon sx={{ mr: 1 }} />
                    <Typography > <b>Phone No.</b></Typography>
                </span>
                <p style={{marginTop: '0px'}}>+44 (0) XXXX XXX XXX</p>
            </Box>

            {/* <Box display="flex" alignItems="center" mb={2}>
            
            <Typography variant="body1">+44 (0) XXXX XXX XXX</Typography>
            </Box> */}
            <Box component="form" noValidate autoComplete="off" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    placeholder="John Weak"
                    className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    placeholder="Enter your query..."
                    rows="4"
                    className="form-textarea"
                    />
                </div>
            </Box>
        </Container>
    );
}

export default ContactUs;