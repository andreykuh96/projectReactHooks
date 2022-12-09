import React from 'react';
import { getPageArray } from '../../../utils/pages';
import MyBtn from '../myBtn/MyBtn';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPageArray(totalPages)

    return (
        <div style={{margin: '30px 0'}}>
            {pagesArray.map(item => 
                <MyBtn 
                key={item}
                style={page === item ? {fontSize: '26px'} : {fontSize: '16px'}}
                onClick={() => changePage(item)}>
                    {item}
                </MyBtn>
            )}     
        </div> 
    );
};

export default Pagination;