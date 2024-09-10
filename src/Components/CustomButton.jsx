import { NavLink } from "react-router-dom";

export default function CustomButton({ to, label }) {
    return (
        <button>
            <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {label}
            </NavLink>
        </button>
    );
}
