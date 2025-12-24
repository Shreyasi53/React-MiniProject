import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
// import About from "./components/About.jsx";

function App() {
  const [mode, setMode] = useState(false); //whether dark mode is enabled or not
  
  return (
    <>
      {/* <Navbar title="TextUtils" about="AboutUs" /> */}
      {/* passing props*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={()=> setMode(!mode)} />
      <div>
        <TextForm heading="Enter the text to analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
