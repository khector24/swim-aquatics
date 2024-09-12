import { NavLink } from "react-router-dom";

export default function CustomButton({ to, label, className }) {
    return (
        <button className={className}>
            <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {label}
            </NavLink>
        </button>
    );
}


