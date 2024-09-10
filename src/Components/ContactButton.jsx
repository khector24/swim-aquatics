import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function ContactButton() {
    return (
        <CustomButton to="/contact" label="Contact Us" />
    );
}
