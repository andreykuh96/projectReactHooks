import React from 'react';
import MyInp from '../UI/myInp/MyInp';
import MySelect from '../UI/mySelect/MySelect';

const Filter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInp
                placeholder='Найти название заголовка'
                value={filter.find}
                onChange={e => setFilter({...filter, find: e.target.value})}
            />
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
                value={filter.sort}
                onChange={select => setFilter({...filter, sort: select})}
            />
        </div>
    );
};

export default Filter;