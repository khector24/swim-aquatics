import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import ContactUsModal from '../Pages/ContactUsModal';
import './component-styles.css/navbar.css';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'FAQ', path: '/FAQ' },
];

const waveURL = "https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/splash-zone-images/wave.png";

function NavBar({ onContactClick, onNewsletterClick }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [openContactModal, setOpenContactModal] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleOpenContactModal = () => {
    //     setOpenContactModal(true);
    //     handleCloseNavMenu(); // Close the menu if it's open
    // };

    // const handleCloseContactModal = () => {
    //     setOpenContactModal(false);
    // };

    return (
        <>
            <AppBar position="static"
                sx={{
                    width: '100%',
                    backgroundColor: '#f0f8ff',
                    boxShadow: 'none'
                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#4F75FF',
                                textDecoration: 'none',
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: '#4F75FF',
                                    textDecoration: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img className="wave-icon" src={waveURL} alt="Wave icon" />
                                    SPLASH-ZONE AQUATICS
                                </Box>
                            </Typography>

                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>
                                            <NavLink
                                                to={page.path}
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    color: 'inherit',
                                                    borderBottom: isActive ? '5px solid black' : 'none',
                                                })}
                                            >
                                                {page.name}
                                            </NavLink>
                                        </Typography>
                                    </MenuItem>
                                ))}
                                {/* <MenuItem onClick={onContactClick}>Contact Us</MenuItem> */}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#4F75FF',
                                textDecoration: 'none',
                            }}
                        >
                            SPLASH-ZONE
                        </Typography>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        <NavLink
                                            to={page.path}
                                            style={({ isActive }) => ({
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                borderBottom: isActive ? '5px solid black' : 'none',
                                            })}
                                        >
                                            {page.name}
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}

                            {/* Add Contact Us and Newsletter inside the dropdown */}
                            <MenuItem onClick={() => { handleCloseNavMenu(); onContactClick(); }}>
                                <Typography textAlign="center">Contact Us</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => { handleCloseNavMenu(); onNewsletterClick(); }}>
                                <Typography textAlign="center">Newsletter</Typography>
                            </MenuItem>
                        </Menu>


                        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
                            {pages.map((page) => (
                                <Button
                                    className='nav-button'
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: '#4F75FF',
                                        display: 'block',
                                        '&:hover': { backgroundColor: 'transparent' }
                                    }}
                                >
                                    <NavLink
                                        to={page.path}
                                        style={({ isActive }) => ({
                                            fontWeight: "bold",
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            borderBottom: isActive ? '5px solid #4F75FF' : 'none',
                                        })}
                                        className="nav-link"
                                    >
                                        {page.name}
                                    </NavLink>
                                </Button>
                            ))}
                            <Button
                                className='nav-button'
                                onClick={onContactClick}
                                sx={{ my: 2, color: '#4F75FF', display: 'block', fontWeight: "bold", }}
                            >
                                Contact Us
                            </Button>
                            <Button
                                className='nav-button'
                                onClick={onNewsletterClick}  // Add this click handler
                                sx={{ my: 2, color: '#4F75FF', display: 'block', fontWeight: "bold" }}
                            >
                                Newsletter
                            </Button>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Modal for Contact Us */}
            {/* <ContactUsModal open={openContactModal} handleClose={handleCloseContactModal} /> */}
            {/* <Button
                onClick={onContactClick}
                sx={{ my: 2, color: '#4F75FF', display: 'block', fontWeight: "bold", }}
            >
                Contact Us
            </Button> */}
        </>
    );
}

export default NavBar;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { NavLink } from "react-router-dom";

// const pages = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/About' },
//     { name: 'Contact', path: '/Contact' },
//     { name: 'FAQ', path: '/FAQ' },
//     { name: 'ContactUs', path: '/ContactUs' },
// ];

// function ResponsiveAppBar() {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     return (
//         <AppBar position="static"
//             sx={{
//                 width: '100%',
//                 backgroundColor: '#FFD94F',
//                 boxShadow: 'none'
//             }}>
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: '#4F75FF',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         Splash-Zone
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="menu"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{ display: { xs: 'block', md: 'none' } }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                                     <Typography sx={{ textAlign: 'center' }}>
//                                         <NavLink
//                                             to={page.path}
//                                             style={({ isActive }) => ({
//                                                 textDecoration: 'none',
//                                                 color: 'inherit',
//                                                 borderBottom: isActive ? '5px solid black' : 'none',
//                                             })}
//                                         >
//                                             {page.name}
//                                         </NavLink>
//                                     </Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>

//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component="div"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: '#4F75FF',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         Splash-Zone
//                     </Typography>

//                     <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page.name}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: '#4F75FF', display: 'block' }}
//                             >
//                                 <NavLink
//                                     to={page.path}
//                                     style={({ isActive }) => ({
//                                         fontWeight: "bold",
//                                         textDecoration: 'none',
//                                         color: 'inherit',
//                                         borderBottom: isActive ? '5px solid white' : 'none',
//                                     })}
//                                 >
//                                     {page.name}
//                                 </NavLink>
//                             </Button>
//                         ))}
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }

// export default ResponsiveAppBar;

