import { Link } from 'react-router-dom';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import CookieService from '../../../../services/CookieService';

gsap.registerPlugin(ScrollTrigger);

const HomeHeroSectionMap = require('../images/vietove-map-hero-introduction.png')

            function HeroSection({isLoggedIn}) {
                const headerRef = useRef(null);
                const heroParagraph = useRef(null);
                const heroImageRef = useRef(null);


                useEffect(() => {
                    console.log(isLoggedIn);
                    let hr1 = headerRef.current;
                    let hpar = heroParagraph.current;
                    gsap.fromTo(hr1, {translateX: -50, opacity: 0}, {translateX: 0, opacity: 1, duration: 1, delay: 0.3})
                    gsap.fromTo(hpar, {translateY: -50, opacity: 0}, {translateY: 0, opacity: 1, duration: 1, delay: 1.3})
                    gsap.fromTo(heroImageRef.current, {translateX: 50, opacity: 0}, {translateX: 0, opacity: 1, duration: 2, delay: 2.3})
                }, []);

                return(
                    <div class="flex">
                                    <div>
                                        <div class="z-10 relative container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
                                            <h1 ref={headerRef} class="text-4xl sm:text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-left ">Lankytinos vietos dabar <span className="whitespace-nowrap">dar idomesnės!</span></h1>
                                            <p ref={heroParagraph} class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-left">Mūsų naujoji <span className='text-green-500 font-semibold'>Vietove.lt</span> aplikacija padės išnaujo atrasti ir pažiurėti į viską kitaip, nuo šiol bus tik smagiau!</p>
                                            <img className='block sm:hidden w-full h-44 object-contain object-bottom' src={HomeHeroSectionMap} />
                                            
                                            
                                            <div class="flex flex-no-wrap flex-col mt-6 sm:mt-0 sm:flex-row justify-center">
                                                <button type="button" class="px-8 py-3 m-2 text-lg text-gray-600 font-semibold rounded border border-gray-700 whitespace-nowrap hover:bg-green-50">Atsisiusti programėlę</button>
                                                {!isLoggedIn && <Link to={'/register'} className="hover:text-gray-500"><h4 className="px-8 py-3 m-2 text-lg bg-red-400 hover:bg-red-500 transition duration-100 text-white font-semibold rounded">Registruotis</h4></Link>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* pc version img */}
                                    <div className='z-0 w-full my-auto hidden sm:block'><img ref={heroImageRef} className='w-full scale-150 object-contain object-left' src={HomeHeroSectionMap} /></div>
                                    
                    </div>
                );
            }

            export default HeroSection;