import React, { useState } from 'react'
import FormData from 'form-data'

function AddLoctions(props) {
    
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [image, setImage] = useState();



    const createLocation = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('title', title)
        data.append('description', description)
        data.append('longitude', longitude)
        data.append('latitude', latitude)
        let imageI = document.querySelector('#imageI');
        data.append("photo", imageI.files[0], 'unknown.jpg');
        
        props.http.post('/api/location/store', data).then(res => console.log(res.status))
    }


  return (
    <form onSubmit={createLocation} class="w-2/3 mx-auto my-4 space-y-4 md:space-y-6" action="#">
                        <div>
                            <label  for="pavadinimas" class="block mb-2 text-sm font-medium text-gray-900">pavadinimas</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="pavadinimas" id="pavadinimas" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="kauno pilis" required="" />
                        </div>
                        <div>
                            <label for="ilguma" class="block mb-2 text-sm font-medium text-gray-900">Ilguma</label>
                            <input value={longitude} onChange={(e) => setLongitude(e.target.value)} type="number" pattern="\d*" maxlength="20" name="longitude" id="longitude" placeholder="0.0000" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                        </div>
                        <div>
                            <label for="platuma" class="block mb-2 text-sm font-medium text-gray-900">Platuma</label>
                            <input value={latitude} onChange={(e) => setLatitude(e.target.value)} type="number" pattern="\d*" maxlength="20" name="latitude" id="latitude" placeholder="0.0000" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                        </div>
                        <div>
                            <label for="aprasymas" class="block mb-2 text-sm font-medium text-gray-900">Aprasymas</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="desc" placeholder="aprasymas" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                        </div>

                        <div>
                            <label for="aprasymas" class="block mb-2 text-sm font-medium text-gray-900">nuotrauka</label>
                            <input type="file" name="imageI" id="imageI" placeholder="Nuotrauk" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                        </div>
                        {/* {image && <img className='w-24 h-24' src={image.uri}} */}
                        <button type="submit" class="w-full px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded">Pridėti</button>
                    </form>
  )
}

export default AddLoctions