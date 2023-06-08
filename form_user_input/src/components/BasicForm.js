import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';

const BasicForm = (props) => {
  const {
    enteredValue: enteredFName,
    valueIsValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    valueBlurHandler: fNameBlurHandler,
    reset: fNameReset
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredLName,
    valueIsValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    valueBlurHandler: lNameBlurHandler,
    reset: lNameReset
  } = useInput(isNotEmpty); 

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.trim().includes('@'));
  
  
  
  
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!fNameIsValid) {
      fNameBlurHandler(event);
      return;
    }

    if(!lNameIsValid) {
      lNameBlurHandler(event);
      return;
    }

    if(!emailIsValid) {
      emailBlurHandler(event);
      return;
    }
    fNameReset();
    lNameReset();
    emailReset();
  }
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label 
            htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='fname' 
            value={enteredFName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler} 
          />
          {fNameHasError && <span style={{ 'color': 'red' }}>First Name Is Invalid</span>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='lname'
            value={enteredLName}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler} 
          />
           {lNameHasError && <span style={{ 'color': 'red' }}>Last Name Is Invalid</span>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email' 
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} 
          />
           {emailHasError && <span style={{ 'color': 'red' }}>Email Is Invalid</span>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
