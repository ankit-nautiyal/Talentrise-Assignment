import React from 'react';
import { Container, Typography, Box } from '@mui/material';
// import '../styles.css';

function AboutUs() {
    return (
        <Container className="page-container">
        <Typography variant="h5" gutterBottom>
            About Us
        </Typography>
        <Box >
            <img
            src="man-pic.jpeg"
            alt="Team member"
            style={{  width:'350px', height: '300px', justifyContent: 'center', marginBottom: '0px' }}
            />
        </Box>
        <Typography variant="body1"  sx={{fontSize: '15px'}}>
            We are a team of dedicated professionals driven by creativity, innovation, and a passion for exceptional design.
            With years of expertise in mobile application and website design, we specialize in transforming ideas into captivating
            digital experiences that seamlessly combine functionality and aesthetics. Our approach is centered on understanding
            the unique needs of each client, ensuring every project we undertake not only aligns with their vision but also elevates
            their brand in the digital space.
        </Typography> 
        <Typography variant="body1"  sx={{fontSize: '15px'}}>
            At the core of our work is our mastery of modern design tools like Figma, which allows us to bring concepts to life with
            precision and style. We take pride in crafting user-centric designs that are intuitive, visually appealing, and optimized
            for performance. From creating sleek mobile applications to designing impactful websites, we aim to deliver solutions that
            resonate with users and leave a lasting impression.
        </Typography>
        </Container>
    );
}

export default AboutUs;