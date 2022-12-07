import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const profileImg = require('../images/profile-photographer-image.jpg');
const profileImg2 = require('../images/profile-photographer-second.jpg');

function ProfileSection() {

	const  profileCard1 = useRef(null);
	const  profileCard2 = useRef(null);

	useEffect(() => {
		gsap.fromTo(profileCard1.current, {translateY: 100}, { translateY: 0, duration: 1, delay: 0.2, scrollTrigger: {
			trigger: profileCard1.current
		}})
		gsap.fromTo(profileCard2.current, {translateY: 100}, { translateY: 0, duration: 1, scrollTrigger: {
			trigger: profileCard1.current
		}})
	}, []);

    return(
<section class="flex flex-col justify-center min-h-screen bg-gray-800">
<div className='translate-y-8'>
<div>
    <div className='sm:w-2/3 px-4 sm:px-0 mx-auto my-6'>
        <h5 className='text-3xl sm:text-5xl text-green-400 font-semibold text-left'>Parodykite kitiems, kokia asmenybė esate!</h5>
        <p className='text-sm sm:text-lg text-gray-100 font-semibold text-left mt-4'>Dabar galėsi turėti savo asmeninį porfelį su įamžintomis nuotraukomis, o ,kad įspudis būtu labiau įtraukiantis, lygių sistema padės užtikrinti norą dalintis.</p>
    </div>
</div>


<div className='flex flex-no-wrap justify-center overflow-x-hidden overflow-y-hidden'>

<div ref={profileCard2} className='-translate-x-1/3 scale-75 opacity-50 absolute'>
            <div
                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div class="w-full md:w-1/3 bg-white grid place-items-center overflow-hidden">
                    <img src={profileImg2} alt="tailwind logo" class="rounded-xl object-cover w-full h-full" />
            </div>
			<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div class="flex flex-row-reverse justify-between item-center">
					<p class="text-gray-400 font-medium hidden md:block">Eksperta-/s</p>
					<div class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p class="text-gray-600 font-bold text-sm ml-1">
							4.23
							<span class="text-gray-500 font-normal">(478 nuotraukos)</span>
						</p>
					</div>
					<div class="">
						
					</div>
					{/* <div class="bg-gray-300 px-3 py-1 rounded-lg text-xs font-medium text-gray-700 hidden md:block">
						Pro</div> */}
                        <div className=''>
                <div class="flex justify-between mb-1">
                {/* <span class="text-sm font-medium text-red-300">Keliautoja-/s</span> */}
                <span class="block text-xs font-semibold text-red-400 ">Level 17</span>
                </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 ">
                    <div class="bg-red-400 h-2 rounded-full w-2/3" ></div>
                    </div>
                    </div>
				</div>
                
				<h3 class="font-black text-gray-800 md:text-3xl text-xl text-left">Tadas Tituvėnas</h3>
                
				<p class="md:text-lg text-gray-500 text-base text-left"> Mėgstu lankytis po gražiausius lietuvos kraštus, taip pat pasidalindama momentais su jumis                   </p>
				{/* <p class="text-xl font-black text-gray-800">
					$110
					<span class="font-normal text-gray-600 text-base">/night</span>
				</p> */}
                <a href="#" className="hover:text-gray-500  text-center sm:w-fit"><h4 className="px-5 py-2 bg-green-400 hover:bg-green-500 transition duration-100 text-white font-semibold rounded-lg">Peržiurėti profilį</h4></a>

			</div>
		</div>
        </div>








    <div ref={profileCard1} className='translate-x-16 sm:translate-x-32 py-4'>
            <div
                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div class="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src={profileImg} alt="tailwind logo" class="rounded-xl object-cover w-full h-full" />
            </div>
			<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div class="flex flex-row-reverse justify-between item-center">
					<p class="text-gray-400 font-medium hidden md:block">Keliautoja-/s</p>
					<div class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p class="text-gray-600 font-bold text-sm ml-1">
							4.56
							<span class="text-gray-500 font-normal">(76 nuotraukos)</span>
						</p>
					</div>
					<div class="">
						
					</div>
					{/* <div class="bg-gray-300 px-3 py-1 rounded-lg text-xs font-medium text-gray-700 hidden md:block">
						Pro</div> */}
                        <div className=''>
                <div class="flex justify-between mb-1">
                {/* <span class="text-sm font-medium text-red-300">Keliautoja-/s</span> */}
                <span class="block text-xs font-semibold text-red-400">Level 12</span>
                </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 ">
                    <div class="bg-red-400 h-2 rounded-full w-2/3" ></div>
                    </div>
                    </div>
				</div>
                
				<h3 class="font-black text-gray-800 md:text-3xl text-xl text-left">Joana Jonaitytė</h3>
                
				<p class="md:text-lg text-gray-500 text-base text-left">Fotografuoti yra mano hobis, čia galiu relizuoti save ir pasidalinti savo rezultatais su jumis 
                    </p>
				{/* <p class="text-xl font-black text-gray-800">
					$110
					<span class="font-normal text-gray-600 text-base">/night</span>
				</p> */}
                <a href="#" className="hover:text-gray-500 text-center sm:w-fit"><h4 className="px-5 py-2 bg-green-400 hover:bg-green-500 transition duration-100 text-white font-semibold rounded-lg">Peržiurėti profilį</h4></a>

			</div>
		</div>
        </div>

        </div>

        <div>
            <h5></h5>
        </div>
        </div>
	</section>

    )
}

export default ProfileSection;