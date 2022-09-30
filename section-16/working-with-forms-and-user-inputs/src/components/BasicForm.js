import useData from "../hooks/use-data";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    dataIsValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    dataChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    empty: emptyFirstNameInput,
  } = useData((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    dataIsValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    dataChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    empty: emptyLastNameInput,
  } = useData((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    dataIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    dataChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    empty: emptyEmailInput,
  } = useData((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredFirstName || !enteredLastName) {
      return;
    }

    console.log(enteredFirstName, enteredLastName);

    emptyFirstNameInput();
    emptyLastNameInput();
    emptyEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
