import "../Components/component-styles.css/table-of-content.css"
import { NavLink } from 'react-router-dom';

export default function TableOfContent() {
    return (
        <div className="table-content" >
            <h2>Content</h2>
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