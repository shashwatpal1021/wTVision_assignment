import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        try {
            localStorage.clear();
            axios.defaults.headers.common['Authorization'] = null;
            navigate('/login');
        } catch (e) {
            console.log('Logout failed', e);
        }
    }, []);

    return (
        <div></div>
    );
};
