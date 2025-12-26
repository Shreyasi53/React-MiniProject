import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  const [mode, setMode] = useState("light");
  const [showAlert, setShowAlert] = useState(true);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {showAlert && (
        <Alert
          alert="Text converted successfully!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div>
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
