import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import {FiUser} from 'react-icons/fi'


const locationImg = require('../images/logoWhiteSmall.png')

function Navbar({user, userToken}) {

    const location = useLocation();
    const [isAdmin, setIsAdmin] = useState()

    //transitions 
    useEffect(() => {
        setMenuActive(false)
        let userEmail = user ? user.email : null;
        let Ifadmin = userEmail == 'admin@gmail.com' ? true : false;
        setIsAdmin(Ifadmin)
        console.log(Ifadmin)
    }, [location])


    const [menuActive, setMenuActive] = useState(false);


    

   

    const handleMenu = () => {
        let oposide = !menuActive;
        setMenuActive(oposide);
    }

    const AdminLink = () => {
        if(isAdmin) {
            return (
                <li><h4 className="px-5 py-3 bg-blue-400 transition duration-100 text-white font-semibold text-center rounded"><Link to='/admin'>ADMIN</Link></h4></li>
        )
        }
        return (
            <></>
        )
        
    }

    const AdminLinkPC = () => {
        if(isAdmin) {
            return (
                
                <div className="px-5 py-3 rounded text-xs font-semibold bg-blue-400 text-white"><Link to='/admin' >ADMIN</Link></div>
        )
        }
        return (
            <></>
        )
        
    }
       
        
    

    return (
        <nav className=" relative h-16 shadow">
            <div className=" relative z-30 bg-white flex justify-between mx-4 md:mx-8 max-w-5xl lg:mx-auto h-full items-center">
                <div className="">
                    <h6 className="font-bold text-gray-600 text-lg"><img class="mt-2 w-2/3 mx-auto object-contain" src={locationImg} alt="logo" /></h6>
                </div>
                <div className="sm:hidden flex justify-around items-center gap-2 ">
                    <a href="#" className=""><h4 className="px-5 py-2 bg-green-400 transition duration-100 text-white font-semibold rounded">Atsisiųsti</h4></a>
                    <div className=" flex-row w-14 h-14 p-2">
                        <div onClick={handleMenu} className="w-full h-full rounded flex flex-col items-center justify-center
                            [&>span]:h-1 [&>span]:bg-gray-600 [&>span]:block [&>span]:rounded [&>span]:translate [&>span]:duration-200">
                            <span className={`${menuActive ? 'rotate-45 translate-y-1 w-5' : 'w-6'} my-0.5 `}></span>
                            <span className={`${menuActive ? '-rotate-45 -translate-y-1' : ''} my-0.5 w-5`}></span> 
                        </div>
                    </div>
                </div>
                <div className="hidden sm:flex ">
                    <div className="flex gap-5 items-center justify-center [&>a]:font-semibold [&>a]:text-gray-600 ">
                        <Link to={'/'}  className="hover:text-gray-800"><h4>Pagrindinis</h4></Link>
                        <Link to={'/about'} className="hover:text-gray-800"><h4>Kas mes esame?</h4></Link>
                        <Link to="/locations" className="hover:text-gray-800"><h4>Vietovės</h4></Link>
                        <a href="#" className="hover:text-gray-800"><h4 className="px-5 py-2 bg-green-400 hover:bg-green-500 text-white font-semibold rounded">Atsisiųsti</h4></a>
                        <AdminLinkPC />
                        {userToken && <Link to={'/profile'} className="hover:text-gray-800"><h4 className="px-3 py-3 bg-gray-50 border border-gray-400 hover:bg-gray-100 text-white font-semibold rounded"><FiUser className="text-gray-500" /></h4></Link>}
                    </div>
                </div>
            </div>

            {/* <div className={`${menuActive ? "block": "hidden"}`}> */}
            <div className={`${menuActive ? "translate-y-0": "-translate-y-full"} relative z-20 transition duration-500`}>
                <div className="sm:hidden w-full h-fit bg-white text-left pt-6 shadow">
                        <ul className="bg-white [&>li]:px-4 [&>li]:py-3 [&>li]:font-semibold [&>li]:text-gray-700">
                            <li><Link to="/">Pagrindinis</Link></li>
                            {userToken && <li><Link to="/profile">Profilis</Link></li>}
                            <li><Link to="/about">Kas mes esame?</Link></li>
                            <li><Link to="/locations">Vietovės</Link></li>
                            <AdminLink />
                            {!userToken && <li><h4 className="px-5 py-3 bg-green-400 transition duration-100 text-white font-semibold text-center rounded"><Link to='/register'>Registruotis</Link></h4></li>}
                        </ul>
                    </div>
            </div>
           
        </nav>
    );
}

export default Navbar;