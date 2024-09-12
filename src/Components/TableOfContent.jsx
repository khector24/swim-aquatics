import "../Components/component-styles.css/table-of-content.css"
import { NavLink } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';


export default function TableOfContent() {
    return (
        <div className="table-content" >
            <Typography variant="h4" component="h2">
                Content
            </Typography>
            <NavLink to={"/"}>Home</NavLink>
            <br />
            <NavLink>Our Philosophy</NavLink>
            <br />
            <NavLink>Our Offering</NavLink>
            <br />
            <NavLink>Student Benefits</NavLink>
            <br />
            <NavLink to={"/Testimonials"}>Testimonials</NavLink>
        </div>
    )
}