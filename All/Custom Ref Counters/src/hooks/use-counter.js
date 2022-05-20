import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  // treat this as a normal function of javascript
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(forwards){
        setCounter((prevCounter) => prevCounter + 1);
      }
      else{
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;