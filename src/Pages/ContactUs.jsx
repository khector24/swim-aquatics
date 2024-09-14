export default function ContactUs() {
    return (
        <h1>Hello World!</h1>
    )
}

// import { Box, Typography, IconButton, Modal, Stack } from '@mui/material';
// import { Close, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// import CustomButton from '../components/CustomButton';
// import "../Pages/pages-styles/contact-us.css";
// import { useState } from 'react';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '400px',
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
//     textAlign: 'center',
// };

// export default function ContactUs() {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const email = "goya69@gmail.com";

//     return (
//         <>
//             {/* Contact Us Button in Navbar */}
//             <CustomButton label="Contact Us" onClick={handleOpen} />

//             {/* Modal Popup */}
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="contact-modal-title"
//                 aria-describedby="contact-modal-description"
//             >
//                 <Box sx={style} className="contact-container">
//                     {/* Close Button */}
//                     <IconButton
//                         onClick={handleClose}
//                         sx={{ position: 'absolute', right: 8, top: 8 }}
//                     >
//                         <Close />
//                     </IconButton>

//                     {/* Contact Info */}
//                     <Typography variant="h4" id="contact-modal-title" gutterBottom>
//                         Contact Us
//                     </Typography>
//                     <Typography variant="body1" id="contact-modal-description" gutterBottom>
//                         We would love to hear from you! Whether you have questions, inquiries, or suggestions, feel free to reach out.
//                     </Typography>

//                     <Typography variant="h5" gutterBottom>
//                         Business Hours
//                     </Typography>
//                     <Typography variant="body2">
//                         Monday - Friday: 9:00 AM - 5:00 PM
//                         <br />
//                         Saturday - Sunday: Closed
//                     </Typography>

//                     <Box className="contact-info" mt={4}>
//                         <Typography variant="h5" component="h3" gutterBottom>
//                             Our Contact Information
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             <strong>Phone:</strong> (845) 825-7038
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             <strong>Email:</strong> {email}
//                         </Typography>
//                         <CustomButton to={`mailto:${email}`} label="Email Us" className="email-button" />
//                     </Box>

//                     {/* Social Media Links */}
//                     <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
//                         <IconButton component="a" href="https://www.facebook.com" target="_blank">
//                             <Facebook />
//                         </IconButton>
//                         <IconButton component="a" href="https://www.instagram.com" target="_blank">
//                             <Instagram />
//                         </IconButton>
//                         <IconButton component="a" href="https://www.twitter.com" target="_blank">
//                             <Twitter />
//                         </IconButton>
//                         <IconButton component="a" href="https://www.linkedin.com" target="_blank">
//                             <LinkedIn />
//                         </IconButton>
//                     </Stack>
//                 </Box>
//             </Modal>
//         </>
//     );
// }




// import { Box, Typography, Stack } from '@mui/material';
// import CustomButton from "../components/CustomButton";
// import "../Pages/pages-styles/contact-us.css";
// import { IconButton } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

// export default function ContactUs() {
//     const email = "goya69@gmail.com";

//     return (
//         <Box className="contact-container">
//             <h1>Contact Us</h1>
//             <p>
//                 We would love to hear from you! Whether you
//                 have questions, inquiries, suggestions, or just
//                 want to connect, feel free to reach out.
//             </p>

//             <h4>Business Hours</h4>
//             <p>
//                 Monday - Friday: 9:00 AM - 5:00 PM
//                 Saturday - Sunday: Closed
//             </p>

//             <Box className="contact-info" mt={4}>
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Our Contact Information
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Phone:</strong> (845) 825-7038
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Email:</strong> {email}
//                 </Typography>
//                 <CustomButton to={`mailto:${email}`} label="Email Us" className="email-button" />
//             </Box>

//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <Facebook fontSize="large" className="social-icon" />
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                 <Instagram fontSize="large" className="social-icon" />
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                 <Twitter fontSize="large" className="social-icon" />
//             </a>
//             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <LinkedIn fontSize="large" className="social-icon" />
//             </a>
//         </Box>
//     )
// }