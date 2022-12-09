import React, { useContext } from 'react';
import MyBtn from '../components/UI/myBtn/MyBtn';
import MyInp from '../components/UI/myInp/MyInp';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div style={{width: 500, margin: '0 auto'}}>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInp type='text' placeholder="Введите логин"/>
                <MyInp type='password' placeholder="Введите пароль"/>
                <MyBtn>Войти</MyBtn>
            </form>
        </div>
    );
};

export default Login;