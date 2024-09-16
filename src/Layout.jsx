import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContactUsModal from './Pages/ContactUsModal';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const [openContactModal, setOpenContactModal] = useState(false);

    const handleOpenContactModal = () => setOpenContactModal(true);
    const handleCloseContactModal = () => setOpenContactModal(false);

    return (
        <>
            <Navbar onContactClick={handleOpenContactModal} />
            <main>
                <Outlet context={{ onContactClick: handleOpenContactModal }} />
            </main>
            <Footer onContactClick={handleOpenContactModal} />
            <ContactUsModal open={openContactModal} handleClose={handleCloseContactModal} />
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


