import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './component/Login.jsx';
import { Home } from './component/Home.jsx';
import { Navigation } from './component/Navigation.jsx';
import { Logout } from './component/Logout.jsx';
import { useEffect, useState } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const data=localStorage.getItem('access_token');
        if (data) {
            setIsAuth(true);
        }
    }, [isAuth]);
    
    return (
        <BrowserRouter>
            <Navigation isAuth={isAuth} setIsAuth={setIsAuth} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
