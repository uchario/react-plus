import styles from './Input.module.css';


const Input = (props) => {
    const formClasses = `${styles['form-control']} ${props.error && styles.invalid}`;
    
    return(
       <div className={formClasses}>
            <label htlmFor={props.htmlFor}>{props.label}</label>
            <input
                {...props.input}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {props.error && <span className={`${styles['error-text']}`}>{props.errorMessage}</span>}
       </div>
    );
}

export default Input;