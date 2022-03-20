import React from 'react'
import Navbar from './component/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Blogs from './component/Blogs';
function App()
{
    return<>
    <Navbar/>
    <BrowserRouter> 
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
     <Route path='/blogs' element={<Blogs />}></Route>
    </Routes>
    </BrowserRouter>
    </>
}

export default App;