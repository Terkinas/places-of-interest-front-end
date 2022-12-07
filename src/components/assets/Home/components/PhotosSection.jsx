const kaunoNearPilis = require('../images/previews/kauno-buvusioji-meno-simbolis.jpg')
const kaunoLajuTakas = require('../images/previews/laju-takas-kaunas.jpg')
const vilniusTrakaiCastle = require('../images/previews/trakai-castle-vilnius.jpg')
const kaunoMariuPiliakalniai = require('../images/previews/kauno-mariu-piliakalnis.jpg')

function PhotosSection() {
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
  

            <div className='py-6'>
                <div>

                    {/* main */}
                    <div className='w-full mb-4'>
                        <img className='rounded-xl shadow' src={kaunoLajuTakas} />
                        <div className='flex justify-between mx-1 mt-2'>
                            <div>
                                <h5 className='font-semibold text-gray-600 text-sm'>The title of laju takas, kaunas</h5>
                                <p className=' text-gray-400 text-xs text-left'>- Arnoldas Aukstuolis</p>
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
                <div className='w-full'>
                    <div className='flex flex-wrap w-full [&>div]:flex-1/2'>
                        <div className='w-1/2'>
                        <img className='rounded-xl shadow' src={kaunoMariuPiliakalniai} />
                        <div className='flex justify-between mx-1 mt-2'>
                            <div>
                                <h5 className='font-semibold text-gray-600 text-xs text-left'>The title of laju takas, kaunas</h5>
                                <p className=' text-gray-400 text-xs text-left scale-75 origin-left'>- Arnoldas Aukstuolis</p>
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






                        <div className='w-1/2'>
                        <img className='rounded-xl shadow' src={vilniusTrakaiCastle} />
                        <div className='flex justify-between mx-1 mt-2'>
                            <div>
                                <h5 className='font-semibold text-gray-600 text-xs text-left'>The title of laju takas, kaunas</h5>
                                <p className=' text-gray-400 text-xs text-left scale-75 origin-left'>- Arnoldas Aukstuolis</p>
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





                        <div className='w-1/2'>
                        <img className='rounded-xl shadow' src={vilniusTrakaiCastle} />
                        <div className='flex justify-between mx-1 mt-2'>
                            <div>
                                <h5 className='font-semibold text-gray-600 text-xs text-left'>The title of laju takas, kaunas</h5>
                                <p className=' text-gray-400 text-xs text-left scale-75 origin-left'>- Arnoldas Aukstuolis</p>
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

                        


                    </div>
                    


                    <div className='flex flex-no-wrap w-full'>



                        <div className='w-1/2'>

                            
                        </div>



                        <div className='w-1/2'></div>
                        
                    </div>
                </div>
            </div>

            </div></div>



















        </section>
    )
}

export default PhotosSection;

