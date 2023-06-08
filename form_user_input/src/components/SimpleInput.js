import useInput from '../hooks/use-input';

import Input from '../Form/Input';

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset
   } = useInput(value => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
   } = useInput(value => value.trim().includes('@'));

  let formIsValid = false;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if(!enteredNameIsValid) {
      nameBlurHandler(event);
      return;
    }
    if(!enteredEmailIsValid) {
      emailBlurHandler(event);
      return;
    }
    console.log(enteredName);
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
        <Input
          htmlFor='name'
          label='Name'
          input={
            {
              type:'text',
              id:'name',
              name: 'name',
              value: `${enteredName}`
            }
          }  
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          error={enteredNameHasError}
          errorMessage='Name is invalid'
        />
        <Input 
          htmlFor='email'
          label='Email'
          input={{ 
            type:'email',
            id:'email',
            value:`${enteredEmail}`
           }}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          error={enteredEmailHasError}
          errorMessage='Email is invalid'
        />
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
