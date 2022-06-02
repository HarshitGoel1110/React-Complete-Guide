import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  
  const authorInputRef = useRef();
  const textInputRef = useRef();
  
  function submitFormHandler(event) {
    event.preventDefault();
    
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    
    // optional: Could validate here
    
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  
  const [isEntering, setIsEntering] = useState(false);
  const focusHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringData = () => {
    setIsEntering(false);
  }

  return (
    <>
      <Prompt when={isEntering} message={(location) => {
        // location will contain information about the url to which we are trying to go to.
        return "If u try to go to another page, then all your form data will be lost."
      }} />
      <Card>
        <form
          onFocus={focusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringData} className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
