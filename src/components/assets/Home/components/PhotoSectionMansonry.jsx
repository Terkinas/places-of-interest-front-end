import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const kaunoLajuTakas = require('../images/previews/laju-takas-kaunas.jpg')
const vilniusTrakaiCastle = require('../images/previews/trakai-castle-vilnius.jpg')
const kaunoMariuPiliakalniai = require('../images/previews/kauno-mariu-piliakalnis.jpg')
const sakurosWoman = require('../images/previews/sakuros-lietuva-nuotrauka.jpg')

function PhotosSectionMansonry() {

    const photoSectionImg0 = useRef(null);
    const photoSectionImg1 = useRef(null);
    const photoSectionImg2 = useRef(null);
    const photoSectionImg3 = useRef(null);

    useEffect(() => {
        gsap.fromTo(photoSectionImg0.current, {translateY: 100, opacity: 0}, {translateY: 0, opacity: 1, duration: 1, delay: 0.1, scrollTrigger: {
            trigger: photoSectionImg0.current
        }})
        gsap.fromTo(photoSectionImg1.current, {translateY: 100, opacity: 0}, {translateY: 0, opacity:1, duration: 1, delay: 0.1, scrollTrigger: {
            trigger: photoSectionImg1.current
        }})
        gsap.fromTo(photoSectionImg2.current, {translateY: 100, opacity: 0}, {translateY: 0, opacity:1, duration: 1, delay: 0.3, scrollTrigger: {
            trigger: photoSectionImg2.current
        }})
        gsap.fromTo(photoSectionImg3.current, {translateY: 100, opacity: 0}, {translateY: 0, opacity:1, duration: 1, delay: 0.1, scrollTrigger: {
            trigger: photoSectionImg3.current
        }})
    },[])

    const products = [
        {
          id: 1,
          name: 'Near Laju Takas, Kaunas',
          href: '#',
          imageSrc: kaunoLajuTakas,
          imageAlt: "dsadsadas .",
          level: '5',
          color: '-Karolis rakštys',
        },
       
      ]


    return(
        <section className="min-h-screen w-full bg-gray-50">
            <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Naujausios nuotraukos</h2>
  

            <div className='py-6 max-w-2xl mx-auto'>
                <div className=''>

                    {/* main */}
                    <div ref={photoSectionImg0} className='w-full mb-4'>
                        <img loading='lazy' className='rounded-xl  shadow' src={kaunoLajuTakas} />
                        <div className='flex justify-between mx-1 mt-2'>
                            <div>
                                <h5 className='font-semibold text-gray-600 text-sm'>The title of laju takas, kaunas</h5>
                                <p className=' text-gray-400 text-xs text-left'>- Karolis rakštys</p>
                            </div>
                            
                            <div className='flex flex-row'>
                                    <div>
                                    <div class="flex justify-between mb-1">
                                        <span class="text-xs font-semibold text-red-400  whitespace-nowrap">Level 11</span>
                                    </div>
                                            <div class="w-full bg-gray-200 rounded-full h-2 ">
                                            <div class="bg-red-400 h-2 rounded-full w-2/3" >

                                            </div>
                                            
                                    </div>
                                    </div>
                                    <div>
                                        {/* <span className='text-xs font-semibold text-gray-400 ml-1'> - Keliautoja-/s</span> */}
                                    </div>
                                  
                                    
                            </div>
                            
                        </div>
                    </div>
                </div>


                {/* smaller ones */}
                <div className=' grid grid-cols-1'>
                    <div className=' grid grid-cols-2 gap-3'>


                        <div ref={photoSectionImg1} className='col-start-1 col-span-1 row-span-1'>
                            <img loading='lazy' className='rounded-xl  shadow' src={kaunoMariuPiliakalniai} />
                            <div className='flex justify-between mx-1 mt-2'>
                                <div>
                                    <h5 className='font-semibold text-gray-600 text-xs text-left'>Kauno marių piliakalnis, Kaunas</h5>
                                    <p className=' text-gray-400 text-xs text-left scale-75 origin-left whitespace-nowrap'>- Kajus Karpauskas</p>
                                </div>
                            
                            <div className='flex flex-row scale-75'>
                                    <div>
                                    <div class="flex justify-between mb-1">
                                        <span class="text-xs font-semibold text-gray-400  whitespace-nowrap">Level 2</span>
                                    </div>
                                            <div class="w-full bg-gray-200 rounded-full h-2 ">
                                            <div class="bg-gray-400 h-2 rounded-full w-2/3" >

                                            </div>
                                            
                                    </div>
                                    </div>
                                    <div>
                                        {/* <span className='text-xs font-semibold text-gray-400 ml-1'> - Keliautoja-/s</span> */}
                                    </div>
                                  
                                    
                            </div>
                            
                        </div>
                        </div>






                        <div ref={photoSectionImg2} className='col-start-2 row-start-1 col-span-1 row-span-2'>
                        <img loading='lazy' className='rounded-xl  shadow' src={vilniusTrakaiCastle} />
                        <div className='flex justify-between mx-1 mt-2'>
                            <div>
                                <h5 className='font-semibold text-gray-600 text-xs text-left'>Trakų didinga pilis, Vilniaus rajonas</h5>
                                <p className=' text-gray-400 text-xs text-left scale-75 origin-left whitespace-nowrap'>- Vilius Vijoklis</p>
                            </div>
                            
                            <div className='flex flex-row scale-75'>
                                    <div>
                                    <div class="flex justify-between mb-1">
                                        <span class="text-xs font-semibold text-yellow-400  whitespace-nowrap">Level 23</span>
                                    </div>
                                            <div class="w-full bg-gray-200 rounded-full h-2 ">
                                            <div class="bg-yellow-400 h-2 rounded-full w-2/3" >

                                            </div>
                                            
                                    </div>
                                    </div>
                                    <div>
                                        {/* <span className='text-xs font-semibold text-gray-400 ml-1'> - Keliautoja-/s</span> */}
                                    </div>
                                  
                                    
                            </div>
                            
                        </div>
                        </div>





                        <div ref={photoSectionImg3} className=''>
                        <img loading='lazy' className='rounded-xl  shadow' src={sakurosWoman} />
                        <div className='flex justify-between mx-1 mt-2'>
                            <div>
                                <h5 className='font-semibold text-gray-600 text-xs text-left'>Sakūrų miestas, Kernavė</h5>
                                <p className=' text-gray-400 text-xs text-left scale-75 origin-left whitespace-nowrap'>- Aušra Zakopanė</p>
                            </div>
                            
                            <div className='flex flex-row scale-75'>
                                    <div>
                                    <div class="flex justify-between mb-1">
                                        <span class="text-xs font-semibold text-purple-400  whitespace-nowrap">Level 32</span>
                                    </div>
                                            <div class="w-full bg-gray-200 rounded-full h-2 ">
                                            <div class="bg-purple-400 h-2 rounded-full w-2/3" >

                                            </div>
                                            
                                    </div>
                                    </div>
                                    <div>
                                        {/* <span className='text-xs font-semibold text-gray-400 ml-1'> - Keliautoja-/s</span> */}
                                    </div>
                                  
                                    
                            </div>
                            
                        </div>
                        </div>

                        


                    </div>
                    


            
                </div>
            </div>

            <div className=' w-fit mx-auto'>
            <Link to={'/feed'} className="hover:text-gray-500"><h4 className="px-5 py-2 bg-gray-800 hover:bg-gray-900 transition duration-100 text-white text-sm font-semibold rounded-lg">Žiurėti daugiau</h4></Link>
            </div>

            </div></div>


            

        </section>
    )
}

export default PhotosSectionMansonry;

