import React from 'react'
import Navbar from './pages/Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
    </div>
  );
}

export default App;
