import React from 'react';

import cl from './myInp.module.css';

const MyInp = (props) => {
    return (
        <input className={cl.myInp} {...props} />
    );
};

export default MyInp;