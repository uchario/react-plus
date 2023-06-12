import { Fragment } from 'react';

import MainNav from '../components/MainNav';

const Error = () => {
    return(
        <Fragment>
            <MainNav />
            <main>
                <h1>An error occured</h1>      
            </main>
        </Fragment>
       
    );
}

export default Error;