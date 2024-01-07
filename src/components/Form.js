import React, {useState} from 'react'

export default function Form(props) {
    const Upperclick = ()=>{
        // console.log("Button was clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to UpperCase", "success");
    }
    const lowerclick = ()=>{
      // console.log("Button was clicked");
      let newtext = text.toLowerCase();
      settext(newtext);
      props.showalert("Converted to LowerCase", "success");
  }
  const clearclick = ()=>{
    // console.log("Button was clicked");
    let newtext = '';
    settext(newtext);
    props.showalert("Text Cleared!!!", "success");
}
const sentenceclick = ()=>{
  // console.log("Button was clicked");
  let a = text.toLowerCase();
  let newtext = a.charAt(0).toUpperCase() + a.slice(1);
  settext(newtext);
  props.showalert("Converted to SentenceCase", "success");
}
const copyclick = ()=>{
  // let text1 = text;
  navigator.clipboard.writeText(text);
  props.showalert("Text Copied!!!", "success");
}
    const Onchangehandler = (event)=>{
        console.log("On change");
        settext(event.target.value);
    }
    const [text, settext] = useState("");
  return (
    <>
    <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <textarea className="form-control" value = {text} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} onChange={Onchangehandler} id="exampleFormControlTextarea1" rows="8"></textarea><br/>
  <button className="btn btn-primary mx-3" onClick={Upperclick}>Convert to UPPERCASE</button>
  <button className="btn btn-primary mx-3" onClick={lowerclick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-3" onClick={sentenceclick}>Convert to Sentencecase</button>
  <button className="btn btn-primary mx-3" onClick={clearclick}>Clear Text</button>
  <button className="btn btn-primary mx-3" onClick={copyclick}>Copy Text</button>
</div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text=== ""?0:text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes required to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  )
}
