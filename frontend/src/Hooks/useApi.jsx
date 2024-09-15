import axios from 'axios';
import { useEffect, useState } from 'react';

export const useApi = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      };
      const response = await axios({ url, method, data: body, headers });
      console.log("home",response.data)
      setData(response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        // Refresh token if expired
        try {
          const refreshResponse = await axios.post(
            'http://localhost:8000/auth/token/refresh/',
            { refresh: localStorage.getItem('refresh_token') },
            { headers: { 'Content-Type': 'application/json' } }
          );
          localStorage.setItem('access_token', refreshResponse.data.access);
          await fetchData(); // Retry the original request
        } catch (refreshErr) {
          setError('Unauthorized');
        }
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method, body]);

  return { data, error, loading };
};
