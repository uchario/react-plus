import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import Overlay from './Overlay';


const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop 
        onConfirm={props.onConfirm}
      />,
        document.getElementById('backdrop-root')
      )}
      {
        ReactDOM.createPortal(
          <Overlay 
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm} 
          />,
          document.getElementById('overlay-root')
        )
      }
      
      
    </Fragment>
  );
};

export default ErrorModal;
