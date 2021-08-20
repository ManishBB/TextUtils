import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-2">
          <h2>Your text summary...</h2>
          <p>{text.split(" ").length} words, {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes to Read!</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  );
}
