import React from 'react'
import Cards from './components/Cards';
import "./App.css";
import Header from './components/Header';
import Info from './components/Info';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Pollomar from './pages/pollomar';
import Rar from './pages/rar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pollomar" element={<Pollomar/>}/>
          
        <Route path="/rar" element={<Rar/>}/>
          
        <Route path="/" element={
        <div className= "App">
          <Header/>
            <Cards/>
            <Info/>
          </div>}/>
             
      </Routes>
    </Router>
  )
}

export default App
