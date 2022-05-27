import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueInputBlurHandler = () => {
    // onBlur will be called whenever the specific html element loses focus.
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  }

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError: enteredValueIsValid,
    valueChangeHandler: valueInputChangeHandler,
    inputBlurHandler: valueInputBlurHandler,
    reset
  };
};

export default useInput;
