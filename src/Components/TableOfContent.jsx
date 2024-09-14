import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../Components/component-styles.css/table-of-content.css';
import { Link } from 'react-scroll'; // You can use react-scroll for smooth scrolling



export default function TableOfContent() {
    return (
        <div className="table-content">
            <Typography variant="h4" component="h2">
                Content
            </Typography>
            <NavLink to="/">Home</NavLink>
            <br />
            <Link to="philosophy" smooth={true} duration={500}>Our Philosophy</Link>
            <br />
            <Link to="what-we-offer" smooth={true} duration={500}>Our Offering</Link>
            <br />
            <Link to="student-benefits" smooth={true} duration={500}>Student Benefits</Link>
            <br />
            <NavLink to="/Testimonials">Testimonials</NavLink>
        </div>
    );
}





// import "../Components/component-styles.css/table-of-content.css"
// import { NavLink } from 'react-router-dom';
// import { Typography, Stack } from '@mui/material';


// export default function TableOfContent() {
//     return (
//         <div className="table-content" >
//             <Typography variant="h4" component="h2">
//                 Content
//             </Typography>
//             <NavLink to={"/"}>Home</NavLink>
//             <br />
//             <NavLink>Our Philosophy</NavLink>
//             <br />
//             <NavLink>Our Offering</NavLink>
//             <br />
//             <NavLink>Student Benefits</NavLink>
//             <br />
//             <NavLink to={"/Testimonials"}>Testimonials</NavLink>
//         </div>
//     )
// }