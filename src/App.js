// import About from './About';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [dark, setDark] = useState(false);
  const handleThemeChange = (event) => {
    if (event.target.checked) {
      setDark(true);
      document.body.style.backgroundColor = '#0c0c15';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setDark(false);
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const [alertMsg, setAlertMsg] = useState(null);

  const showAlert = (message, type) => {
    setAlertMsg({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlertMsg(null)
    }, 2000);
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" about="About App" theme={dark} handleThemeChange={handleThemeChange} />
      <Alert alert={alertMsg} />
      {/* <Routes> */}
        {/* <Route path="/about" element={<About theme={dark} showAlert={showAlert} />}/> */}
        {/* <About theme={dark} showAlert={showAlert} /> */}
        {/* <Route path="/" element={<TextForm heading="Enter your text below to Analyze" theme={dark} showAlert={showAlert} />}/>  */}
        <TextForm heading="Enter your text below to Analyze" theme={dark} showAlert={showAlert} />
      {/* </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
