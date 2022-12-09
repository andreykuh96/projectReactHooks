import React from 'react';

import cl from './myBtn.module.css';

const MyBtn = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myBtn}>
            {children}
        </button>
    );
};

export default MyBtn;