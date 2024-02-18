import React, { useState } from 'react'

export default function TextForm(props) {

    const handleTextChange = (event) => setText(event.target.value);
    const converUpperCase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case", "success");
    };
    const converLowerCase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lower Case", "success");
    };
    const clearText = () => {
        setText("")
        props.showAlert("Text Cleared", "success");
    };
    const githubReadme = () => {
        let newText = '#' + text.toLowerCase().replaceAll(' ', '-');
        newText = '[' + text + '](' + newText + ')';
        setText(newText);
        props.showAlert("Converted to Github Table Content Format", "success");
    }
    const removeSpace = () => {
        setText(text.replaceAll(' ', ''))
        props.showAlert("All Space Removed", "success");
    };
    const decodeText = () => {
        setText(decodeURI(text))
        props.showAlert("Text Decoded", "success");
    };
    const encodeText = () => {
        setText(encodeURI(text))
        props.showAlert("Text Encoded", "success");
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState("");

    const countWords = (text) => {
        const trimmedStr = text.trim(); // Trim the string to remove leading and trailing whitespaces
        const wordsArray = trimmedStr.split(/\s+/); // Split the string into an array of words using a space as the delimiter
        const filteredWordsArray = wordsArray.filter(word => word !== ''); // Filter out empty strings (in case of multiple spaces)
        return filteredWordsArray.length;
    }

    return (
        <div style={{ color: props.theme ? 'white' : 'black' }}>
            <div className="container my-3" >
                <div className="my-3">
                    <h1>{props.heading}</h1>
                    <textarea style={{ backgroundColor: props.theme ? '#2f3148' : 'white', color: props.theme ? 'white' : 'black' }} className="form-control" value={text} onChange={handleTextChange} id="textId" rows="8" placeholder='Enter your text here'></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={converUpperCase}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={converLowerCase}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={githubReadme}>Github Table Content</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={removeSpace}>Remove Space</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={decodeText}>Decode Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={encodeText}>Encode Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container" >
                <h3>Your Text Summary</h3>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.00625 * 60 * text.split(" ").length} Seconds to read.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
