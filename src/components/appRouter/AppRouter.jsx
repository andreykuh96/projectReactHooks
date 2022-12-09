import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router';

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(item =>
                    <Route
                        exact={item.exact}
                        path={item.path}
                        element={item.element}
                        key={item.path}
                    />    
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(item =>
                    <Route
                        exact={item.exact}
                        path={item.path}
                        element={item.element}
                        key={item.path}
                    />    
                )}
            </Routes>
            
    );
};

export default AppRouter;