import { useApi } from '../Hooks/useApi';
import './Home.css';

export const Home = () => {
    const { data, loading, error } = useApi('http://127.0.0.1:8000/home/');

    console.log("Home-data", data)

    if (loading) return <div className="home-container">
        <h3>Loading...</h3>
    </div>;;
    if (error) return <div className="home-container">
        <h3>Error: {error}</h3>
    </div>;

    return (
        <div className="home-container">
            <h3>Hi {data?.message}</h3>
        </div>
    );
};
