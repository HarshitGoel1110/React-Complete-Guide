import { useEffect, useRef } from "react";
import style from "./Input.module.css";

const Input = (props) => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  } , []);

  return (
    <div
      className={`${style.control} ${
        props.isValid === false ? style.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
