import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUppercase = () => {
    if (text.length === 0) {
      props.showAlert("Textbox is Empty", "danger");
    }
    else {
      setText(text.toUpperCase());
    }
  };

  const handleLowercase = () => {
    if (text.length === 0) {
      props.showAlert("Textbox is Empty", "danger");
    }
    else {
    setText(text.toLowerCase());
    }
  };

  const handleFind = () => {
    if (text.length === 0) {
      props.showAlert("Textbox is Empty", "danger");
    }
    else {
    let a = prompt('Enter your word');
    if (a != null) {
      let i, j, x = 0, y = 0;

      for (i = 0; i < text.length; i++) {
        if (text[i] === a[0]) {
          for (j = i; j < i + a.length; j++) {
            if (text[j] === a[j - i]) {
              y++;
            }
            if (y === a.length) {
              x++;
            }
          }
          y = 0;
        }
      }
      alert("'" + a + "' was found " + x + " times.");
    }
  }
  };

  const handleReplace = () => {
    if (text.length === 0) {
      props.showAlert("Textbox is Empty", "danger");
    }
    else {
    let a = prompt("Enter word to replace: ");
    let b = prompt("Enter word to replace with: ");

    setText(text.replace(a, b));
    }
  };

  const handleCopy = () => {
    
    if (text.length === 0) {
      props.showAlert("Textbox is Empty", "danger");
    }

    else {
      let a = document.getElementById('textbox');
      a.select(); //To select whole text
      navigator.clipboard.writeText(a.value); //To copy the value into clipboard
      props.showAlert("Copied to Clipboard", "success");
    }
  };

  const handleClear = () => {
    setText('');
  };

  //Important (To handle changes in the text box)
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Text= variable state which we will use and setText will be used to update/change it.
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2 className={`mx-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}> {props.heading} </h2>
        <div className="container mb-3">
          <textarea
            className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#585858', color: props.mode === 'light' ? 'black' : 'white' }} value={text} id="textbox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercase}><i class="bi bi-arrow-up"></i> UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowercase}><i class="bi bi-arrow-down"></i> lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleFind}><i class="bi bi-search"></i> Find </button>
        <button className="btn btn-primary mx-2" onClick={handleReplace}><i class="bi bi-arrow-down-up"></i> Replace a Word</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}><i class="bi bi-clipboard"></i> Copy to Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}><i class="bi bi-x-lg"></i> Clear All</button>
      </div>

      <div className={`container my-4 mx-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <h2>Summary</h2>
        <p> <b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
        <p> You would need about <b>{text.length > 0 ? 0.008 * text.split(" ").length : 0}</b> minutes to read it.</p>
        <p> <b>PREVIEW</b><br />{text.length > 0 ? text : "*Your Text Preview Here*"}</p>
      </div>
    </>
  );

};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Your heading here",
};
