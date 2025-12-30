import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~!@#$%^&*`/";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);//for optimize

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator]) //if any changes run again

  return (
    <>
      <div className="w-full max-w-md mx-auto my-8 bg-gray-800 rounded-xl shadow-lg p-5">
        <h1 className="text-white text-center text-lg font-semibold mb-4">
          Password Generator
        </h1>

        <div className="flex items-center bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 text-gray-800 outline-none"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
             <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={()=>{
                setNumberAllowed((prev)=>!prev);
             }}/>
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
             <input
             type="checkbox"
             defaultChecked={charAllowed}
             id="characterInput"
             onChange={()=>{
                setCharAllowed((prev) => !prev);
             }}/>
             <label htmlFor="numberInput">characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
//useCallback is a React Hook that lets you cache a function defination between re-renders
//useCallback(fn, dependencies)
