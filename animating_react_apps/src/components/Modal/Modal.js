import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTiming = {
    enter: 1000,
    exit: 2000
}

const modal = (props) => {
    
    return(
        <Transition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
        >
            {(state) => {
                const cssClasses = [
                    'Modal', 
                    state === 'entering' ? 
                    'ModalOpen' : 
                    state === 'exiting' ?
                    'ModalClosed' : 
                    null
                ];
                return(
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                );
            }}
            
        </Transition>
      
    );
};

export default modal;