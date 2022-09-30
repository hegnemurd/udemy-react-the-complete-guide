import { useState } from "react";

const useData = (checkData) => {
  const [enteredData, setEnteredData] = useState("");
  const [isAttempted, setIsAttempted] = useState(false);

  const dataIsValid = checkData(enteredData);
  const hasError = !dataIsValid && isAttempted;

  const dataChangeHandler = (event) => {
    setEnteredData(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsAttempted(true);
  };

  const empty = () => {
    setEnteredData("");
    setIsAttempted(false);
  };

  return {
    value: enteredData,
    dataIsValid: dataIsValid,
    hasError,
    dataChangeHandler,
    inputBlurHandler,
    empty,
  };
};

export default useData;
