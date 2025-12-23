
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleLowClick =()=>{
    setText(text.toLowerCase());
  }

  const [text, setText] = useState("Enter text here");
  // text= "new text";//wrong way to change the state
  // setText("new text");//correct way to change the state
  return (
    <>
      <h1>{props.heading} </h1>
      <div className="max-w-xl mx-auto mt-10">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="w-full h-40 border p-3 rounded"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <div className="mt-4 gap-4 flex">
          <button
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleUpClick}
          >
            convert to UpperCase
          </button>
          <button 
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleLowClick}
          >
            convert to LowerCase
          </button>
        </div>
      </div>
    </>
  );
}

//when we used classbase component then we have .this keyword to access props but in functional component we can directly use props without this keyword
// we can use useState hook to manage the state of the component
//in classbase component we have this.state and this.setstate to manage the state of the component
//hooks gives us properties of classbase component in functional component
