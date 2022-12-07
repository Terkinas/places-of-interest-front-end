import React, { useEffect, useState, CSSProperties, useRef  } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate
} from "react-router-dom";

// styles
import './App.css';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//components
// import Navbar from './components/assets/Navbar';
//import Home from './components/assets/Home/Home';
// import Footer from './components/assets/Footer';

import { SyncLoader } from 'react-spinners';
import axios from 'axios';
import CookieService from './services/CookieService';
import { UserContext } from './assets/context';

// lazy components
const LazyHome = React.lazy(() => import('./components/assets/Home/Home'))
const LazyAbout = React.lazy(() => import('./components/assets/About/About'))
const LazyRegister = React.lazy(() => import('./components/assets/Register/Register'))
const LazyLogin = React.lazy(() => import('./components/assets/Login/Login'))
const LazyProfile = React.lazy(() => import('./components/assets/Profile/Profile'))
const LazyFeed = React.lazy(() => import('./components/assets/Feed/Feed'))
const LazyAdmin = React.lazy(() => import('./components/assets/Admin/AdminPanel'))

// const LazyLocationsList = React.lazy(() => import('./components/assets/Admin/pages/LocationsList'))
const LazyAddLocation = React.lazy(() => import('./components/assets/Admin/pages/AddLoctions'))
const LazyLocationsList = React.lazy(() => import('./components/assets/Admin/pages/LocationsList'))
const LazyPostsList = React.lazy(() => import('./components/assets/Admin/pages/PostsList'))
const LazyLocations = React.lazy(() => import('./components/assets/Locations/Locations'))


const LazyNavbar = React.lazy(() => import('./components/assets/Navbar'))
const LazyFooter = React.lazy(() => import('./components/assets/Footer'))



const override: CSSProperties = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#4ade80",
};

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const [loading, setLoading] = useState(false);
  const [isHidden, setIsHidden] = useState('invisible');

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const smoothLoad = useRef(null);


  const authContext = React.useMemo(() => {
    return {
      signIn: (authToken:any, authUser:any) => {
        setUserToken(authToken)
        setUser(authUser)
        setIsLoggedIn(true)
      },
      signUp: (authToken:any,authUser:any) => {
        setUserToken(authToken)
        setUser(authUser)
        console.log(userToken)
        setIsLoggedIn(true)
      },
      signOut: () => {
        if(CookieService.get('access_token')) {
          CookieService.remove('access_token')
        }
        setUserToken(null)
        setUser(null)
        setIsLoggedIn(false)
      } 
    }
  }, []);

  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
       //Authorization: `Bearer ${token}` 
      Authorization: `Bearer ${CookieService.get('access_token')|| ''}`
    },
    withCredentials: true
  });

  useEffect(() => {
    
    if(CookieService.get('access_token')) {
      setUserToken(CookieService.get('access_token'));
    }
    
    const getUser = async () => {
      let resUser = await http.get('api/user');
      setUser(resUser.data)
    }

    if(userToken) {
      if(!user) {
        getUser();
      }
      setIsLoggedIn(true)
    }


    gsap.fromTo(smoothLoad.current, {opacity: 0}, {opacity: 1, duration: 1})
    // setLoading(true);
    setTimeout(() => {
      setIsHidden('visible');
      setLoading(false)
    }, 300);
  }, [userToken])

  return (

      <UserContext.Provider value={authContext}>
      <div>

        {/* <div className='h-12'>
          {JSON.stringify(userToken)}
          {JSON.stringify(user)}
        </div> */}

        <div className={isHidden}>
          <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
            <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
            <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
          </div>}>
            <div ref={smoothLoad}>
            <Router>
              <LazyNavbar user={user} userToken={userToken} />
              <Routes>
                <Route path='/' element={
                  <React.Suspense fallback={<></>}>
                    <LazyHome isLoggedIn={isLoggedIn} />
                  </React.Suspense>} />

                  <Route path='/about' element={
                  <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
                  <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
                  <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
                </div>}>
                    <LazyAbout />
                  </React.Suspense>} />

                  <Route path='/register' element={
                  <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
                  <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
                  <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
                </div>}>
                    <LazyRegister http={http} />
                  </React.Suspense>} />

                  <Route path='/login' element={
                  <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
                  <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
                  <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
                </div>}>
                    <LazyLogin http={http} setIsLoggedIn={setIsLoggedIn} />
                  </React.Suspense>} />

                  <Route path='/locations' element={
                  <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
                  <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
                  <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
                </div>}>
                    <LazyLocations http={http}  />
                  </React.Suspense>} />

            
                      <Route path='/profile' element={
                        CookieService.get('access_token') ? 
                          <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
                        <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
                        <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
                      </div>}>
                          <LazyProfile user={user} http={http} />
                        </React.Suspense> : <Navigate to='../login' /> }
                      

                        />
                        
  
                        <Route path='/feed' element={
                        CookieService.get('access_token') ? 
                          <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
                        <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
                        <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
                      </div>}>
                          <LazyFeed user={user} http={http}  />
                        </React.Suspense> : <Navigate to='../login' /> }
                      

                        />


                      <Route path='admin' element={
                        CookieService.get('access_token') ? 
                          <React.Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
                        <SyncLoader color="#4ade80" speedMultiplier={0.5} className="" />
                        <span className='mt-4 text-sm text-green-400 font-semibold'>Prašome palaukti</span>
                      </div>}>
                          <LazyAdmin user={user} />
                        </React.Suspense> : <Navigate to='../login' /> }

                    

                        />
                        <Route path='admin/addLocation' element={<LazyAddLocation user={user} http={http} />} />
                        <Route path='admin/locations' element={<LazyLocationsList user={user} http={http} />} />
                        <Route path='admin/posts' element={<LazyPostsList user={user} http={http} />} />



              </Routes>
              <LazyFooter />
            </Router>
            </div>
          </React.Suspense>
          </div>
        </div>
        </UserContext.Provider>
  );
}

export default App;
