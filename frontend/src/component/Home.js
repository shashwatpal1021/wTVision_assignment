import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";

export const Home = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){
            navigate('/login')  
        }
        else{
            (async () => {
            try {
                const {data} = await axios.get('http://localhost:8000/home/', {
                headers: {
                  'Content-Type': 'application/json',
                }
              });

              setMessage(data.message);
            } catch (e) {
                console.log('not auth')
            }
        })()};
    }, []);



    return <div className="form-signin mt-5 text-center">
        <h3>Hi {message}</h3>
        
    </div>
}
