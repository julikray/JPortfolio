import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Project from './component/Project/Project'
import Footer from './component/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './component/About/About'

function App() {
  return (
    <>
     <div className="container">

    <Header/>
     </div>
    <div className='container'>
    <Home/>
    </div>

    <div className="container">
    <About/>
    <Project/>
    <Footer/>

    </div>
  
    

    
    </>
  )
}

export default App