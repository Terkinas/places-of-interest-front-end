import { Link } from 'react-router-dom';
import CookieService from '../../../services/CookieService';

import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

import { useContext } from 'react';
import { UserContext } from '../../../assets/context';


const locationImg = require('../../images/logoWhiteSmall.png')

function Login(props) {

    const navigate = useNavigate();

    const { signIn } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errStatus, setErrStatus] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const csrf = await props.http.get('/sanctum/csrf-cookie')
        console.log('csrf =', csrf)

        const login = await props.http.post('api/login', {
            email: email,
            password: password,
        }).catch((error) => {
            
            console.log('erorr = ', error.response.status)
            if (error.response.status == 401) {
                setErrStatus('Neteisingai įvesti duomenys!')
            }
        })
        
        // console.log('login =', login.data);

        const options = { path: '/' };
        console.log(login.data.data.token)
        CookieService.set('access_token', login.data.data.token, options);

        props.setIsLoggedIn(true);
        if(login.status == 200) {
            signIn(login.data.data.token, login.data.data.user)
            navigate('/');
        }

    }

    return (
        <section class="bg-gray-50  min-h-screen">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img class="mt-2 w-1/2 mx-auto object-contain" src={locationImg} alt="logo" />   
                </a>
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Prisijunkite prie paskyros
                    </h1>
                    <h6 className='text-red-400'>{errStatus}</h6>
                    <form onSubmit={handleLogin} class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label  for="email" class="block mb-2 text-sm font-medium text-gray-900">El.paštas</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="vardas@gmail.com" required="" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Slaptažodis</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 ">Prisiminti mane</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-green-600 hover:underline ">Pamiršote slaptažodį?</a>
                        </div>
                        <button type="submit" class="w-full px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded">Prisijungti</button>
                        <p class="text-sm font-light text-gray-500 ">
                            Dar neturite paskyros? <Link to={'/register'} class="font-medium text-green-600 hover:underline ">Registruotis</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login;