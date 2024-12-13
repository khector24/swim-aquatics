import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import FAQ from "./Pages/FAQ"
import Layout from './Layout'
import Testimonials from './Pages/Testimonials'
import ContactUs from './Pages/ContactUs'
import UnsubscribePage from './Pages/UnsubscribePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/ContactUS' element={<ContactUs />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Testimonials' element={<Testimonials />} />
          <Route path="/unsubscribe" element={<UnsubscribePage />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
