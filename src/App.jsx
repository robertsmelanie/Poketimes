import Navbar from "./components/Navbar"
import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from "./components/About"
import Contact from "./components/Contact"
import Post from "./components/Post"

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/posts/:post_id" element={<Post/>}/>
          
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}
// function App() {
// <></>

// }

export default App
