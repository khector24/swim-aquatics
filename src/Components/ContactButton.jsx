import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";
import "../Components/component-styles.css/contact-button.css"

export default function ContactButton() {
    return (
        <CustomButton
            className="contact-button"
            href="/contact"
            to="/contact"
            label="Contact Us" />
    );
}



