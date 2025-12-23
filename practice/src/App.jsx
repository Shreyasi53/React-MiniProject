import './App.css';
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="AboutUs" />
       {/* passing props*/}
       {/* <Navbar/> */}
       <div>
        <TextForm heading="Enter the text to analyze"/>
       </div>
    </>
  );
}

export default App;
