
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const treeImg = require('../images/card-tree-illustration-vietove-game.png')
const badgeImg = require('../images/card-badge.png')
const thirdImg = require('../images/flying-island-vietove-game.png')

            function CardsSection() {
                const cardRef1 = useRef(null);
                const cardRef2 = useRef(null);
                const cardRef3 = useRef(null);

                useEffect(() => {
                    gsap.fromTo(cardRef1.current, {translateY: 50}, {translateY: 0, duration: 1, delay: 0.1, scrollTrigger: {
                        trigger: cardRef1.current
                    }})
                    gsap.fromTo(cardRef2.current, {translateY: 50}, {translateY: 0, duration: 1, delay: 0.3, scrollTrigger: {
                        trigger: cardRef2.current
                    }})
                    gsap.fromTo(cardRef3.current, {translateY: 50}, {translateY: 0, duration: 1, delay: 0.1, scrollTrigger: {
                        trigger: cardRef3.current
                    }})
                }, [])

                return(
                    <section className="w-full min-h-screen bg-gradient-to-b from-green-400 to-gray-800 py-8 mt-12">
                        <div className='flex flex-wrap justify-center gap-5 lg:gap-7 lg:w-4/5 xl:w-2/3 mx-auto -translate-y-20'>

                        <a ref={cardRef1} href="#" class="block p-6 w-4/5 max-w-sm bg-gray-800 rounded-lg border border-gray-200 shadow-lg shadow-[inset_0_-2px_30px_rgba(0,0,0,0.3)]">
                    
                            <img loading="lazy" className='h-52 mx-auto rounded-xl' src={treeImg} />
                            <span className='block text-xs font-semibold text-green-400 text-left'>Sveikata</span>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-left text-gray-50">Laisvalaikis gamtoje išties gerina sveikata</h5>
                            <p class="font-normal text-sm text-gray-400 text-left">Norime priminti, jog sveikas gyvenimo būdas, buvimas gryname ore - geresnės sveikatos pamatas.</p>
                        </a>

                        <a ref={cardRef2} href="#" class="block p-6 w-4/5 max-w-sm bg-gray-800 rounded-lg border border-gray-200 shadow-lg my-6 sm:my-0 shadow-[inset_0_-2px_30px_rgba(0,0,0,0.3)]">
                      
                            <img loading="lazy" className='h-52 mx-auto scale-75' src={badgeImg} />
                            <span className='block text-xs font-semibold text-red-400 text-left'>Apdovanojimai</span>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-left text-gray-50">Gauk nuopelnus už gražiausias nuotraukas</h5>
                            <p class="font-normal text-sm text-gray-400 text-left">Būsi apdovanotas taškais už pasidalintas nuotraukas, kurias mūsų vartotojai pažymės kaip patinka.</p>
                        </a>     

                        
                        <a ref={cardRef3} href="#" class="block p-6 w-4/5 max-w-sm bg-gray-800 rounded-lg border border-gray-200 shadow-lg shadow-[inset_0_-2px_30px_rgba(0,0,0,0.3)]">
                            <img loading="lazy" className='h-52 mx-auto' src={thirdImg} />
                            <span className='block text-xs font-semibold text-red-400 text-left'>Apdovanojimai</span>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-left text-gray-50">Lengviau atrasti lankytinas vietoves lietuvoje</h5>
                            <p class="font-normal text-sm text-gray-400 text-left">Žemėlapyje pažymėtuose vietose galėsite nufotografuoti vieną nuotrauką ir ją pasidalinti su programėlės vartotojais.</p>
                        </a>                       
              
               
                        </div>
                    </section>
                    

                );
            }

            export default CardsSection;