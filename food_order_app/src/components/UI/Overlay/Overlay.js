import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import Backdrop from './Backdrop/Backdrop';
import Modal from './Modal/Modal';

const Overlay = (props) => {
    return(
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlay'))}
            {createPortal(<Modal>{props.children}</Modal>, document.getElementById('overlay'))}
        </Fragment>
    );
};

export default Overlay;