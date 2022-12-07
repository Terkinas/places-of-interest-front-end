import axios from 'axios';
import { useState } from 'react';
import CookieService from '../services/CookieService';

const Home = () => {
    const [token, setToken] = useState('');

    const http = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
           //Authorization: `Bearer ${token}` 
          Authorization: `Bearer ${CookieService.get('access_token')|| ''}`
        },
        withCredentials: true
      });

    const handleLogin = async () => {
        const csrf = await http.get('/sanctum/csrf-cookie')
        console.log('csrf =', csrf)
        const login = await http.post('api/login', {
            email: 'admin3@gmail.com',
            password: 'secret123',
        });
        console.log('login =', login.data.data.token);
        setToken(login.data.data.token);
        const options = { path: '/' };
        CookieService.set('access_token', login.data.data.token, options);
      }
    
    
      // const config = {
      //   headers: { Authorization: `Bearer ${token}` }
      // };
    
      const reqUser = async () => {
        const user = await http.get('api/user');
        console.log('user = ', user)
      }

    return (
        <div>
            <button>Register</button>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={reqUser}>Get user</button>
      <button onClick={() => console.log(token)}>See Token</button>
      <button onClick={() => console.log(CookieService.get('access_token'))}>Cookie Token</button>
        </div>
    )
}

export default Home;