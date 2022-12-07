import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CookieService from '../../../services/CookieService';

import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../../assets/context';

// images
const locationImg = require('../../images/logoWhiteSmall.png')

function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const { signUp } = useContext(UserContext);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const csrf = await props.http.get('/sanctum/csrf-cookie')
        console.log('csrf =', csrf)

        const register = await props.http.post('api/register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        }).catch(err => console.log(err));

        console.log('register =', register);

        const options = { path: '/' };
        CookieService.set('access_token', register.data.data.token, options);

        if(register.status == 200) {
            console.log(register.data.data.token);
            signUp(register.data.data.token, register.data.data.user);
            navigate('/');
        }
    }


    return (
        <section class="bg-gray-50 pb-6 min-h-screen">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-3 sm:mt-3 text-2xl font-semibold text-gray-900">
                <img class="mt-2 w-1/2 mx-auto object-contain" src={locationImg} alt="logo" />  
            </a>
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Registracija
                    </h1>
                    <form onSubmit={handleRegister} class="space-y-4 md:space-y-6" action="#">
                            <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Vardas</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Vardenis Pavardenis" required="" />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">El.paštas</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="vardas@gmail.com" required="" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Slaptažodis</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Pakartotinis slaptažodis</label>
                            <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-500" required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 ">Susipažinau ir sutinku su <a class="font-medium text-green-600 hover:underline" href="#">taisyklėmis</a></label>
                            </div>
                        </div>
                        <button type="submit" class="w-full px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded">Registruotis</button>
                        <p class="text-sm font-light text-gray-500 ">
                            Jau esate prisiregistravęs? <Link to={'/login'} class="font-medium text-green-600 hover:underline">Prisijungti</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Register;