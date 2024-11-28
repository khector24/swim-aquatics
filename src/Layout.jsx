import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContactUsModal from './Pages/ContactUsModal';
import NewsletterModal from './Pages/NewsletterModal';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const [openContactModal, setOpenContactModal] = useState(false);
    const [openNewsletterModal, setOpenNewsletterModal] = useState(false);  // New state for newsletter modal

    const handleOpenContactModal = () => setOpenContactModal(true);
    const handleCloseContactModal = () => setOpenContactModal(false);

    const handleOpenNewsletterModal = () => setOpenNewsletterModal(true);  // Open the newsletter modal
    const handleCloseNewsletterModal = () => setOpenNewsletterModal(false);  // Close the newsletter modal

    return (
        <>
            <Navbar onContactClick={handleOpenContactModal}
                onNewsletterClick={handleOpenNewsletterModal} />

            {/* <main>
                <Outlet context={{ onContactClick: handleOpenContactModal }} />
                <Outlet context={{ onNewsletterClick: handleOpenNewsletterModal }} />
            </main> */}
            <main>
                <Outlet context={{ onContactClick: handleOpenContactModal, onNewsletterClick: handleOpenNewsletterModal }} />
            </main>

            <Footer onContactClick={handleOpenContactModal} />
            <ContactUsModal open={openContactModal} handleClose={handleCloseContactModal} />
            <NewsletterModal open={openNewsletterModal} handleClose={handleCloseNewsletterModal} />
        </>
    );
}


// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//     return (
//         <>
//             <Navbar />
//             <main>
//                 <Outlet />
//             </main>
//             <Footer />
//         </>
//     );
// }


