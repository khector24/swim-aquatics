import { NavLink } from 'react-router-dom';
import "../Components/component-styles.css/navigation-div.css"

export default function NavigationDiv({ to, label, img }) {
    return (
        <div
            className="container"
            style={{
                backgroundImage: `url(${img})`,
            }}>
            <NavLink to={to}>{label}</NavLink>
        </div >
    )
}