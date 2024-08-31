import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import FAQ from "./Pages/FAQ"
import Layout from './Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/FAQ' element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App
