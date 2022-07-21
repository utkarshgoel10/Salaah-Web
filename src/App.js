import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Gallery from './pages/MasonryGallery';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Page from './pages/Company/Page'
import Company from './pages/Company/Company';
import Mentors from './pages/Company/mentors'
// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    // <ChakraProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
        <Routes>
          <Route path='/company' element={<Company/>} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <Routes>
          <Route path='/faq' element={<Faq />} />
        </Routes>
        <Routes>
          <Route path='/mentors' element={<Mentors />} />
        </Routes>
        <Routes>
        <Route path='/company/:id' element={<Page/>} />
        </Routes>
      </BrowserRouter>
    </div>
    // </ChakraProvider>
  );
}

export default App;
