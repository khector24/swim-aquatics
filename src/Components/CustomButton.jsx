import React from 'react';
import { NavLink } from "react-router-dom";

export default function CustomButton({ to, label, className, onClick }) {
    return (
        <button className={className} onClick={onClick}>
            <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {label}
            </NavLink>
        </button>
    );
}



