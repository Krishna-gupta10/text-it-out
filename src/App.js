import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";


function App() {
  const[mode,setMode] = useState('light'); //To Enable or Disable DarkMode
  const[alert,setAlert] = useState(null); //To show Alerts

  const showAlert = (message, type)=> {
    setAlert( {
      msg: message,
      type: type,
  })

  setTimeout(()=> {
    setAlert(null);
  }, 1500);
}
  
  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#585858';
      showAlert("Dark Mode has been enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Text it Out!" link1 = "Home" link2 = "About" mode={mode} toggleMode= {toggleMode}/>
      <Alert alert= {alert}/>
      <div className= "container my-5">
      <TextForm heading= "Enter Text Below:" mode={mode} showAlert= {showAlert}/>
      </div>
      
    </>
  );
}

export default App;
