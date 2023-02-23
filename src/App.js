import React from 'react';
import './App.css';
import Menupage from './components/Menupage';
import Navbar from './components/Navbar';
import RouterProvider from "./RouterProvider.js";

function App() {
  return (
    <>
    <div className="App">
      {/* <Navbar/> */}
      {/* <Menupage/> */}
      <RouterProvider/>
    </div>
    </>
    
  );
}

export default App;
