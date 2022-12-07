import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Locations(props) {
    
    const [locations, setLocations] = useState([]);
    const [filtered, setFiltered] = useState();
   

    useEffect(() => {
       getLocations();
    }, [])

    const getLocations =  () => {
         axios.post(`http://127.0.0.1:8000/api/locations/list`).then(res => {
            setLocations(res.data.locations)
            console.log(res.data)
        })
    }


    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...locations];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFiltered(updatedList);
      };

    // const openLocation = (e) => {
    //     props.http.post(`api/locations/delete/${e}`).then(res => {
    //         console.log(res.data)
    //         getLocations();
    //     })
    // }

    
    
      if(filtered) {
        return (
            <section className='w-full'>
            <div className='w-10/12 mx-auto'>
                <input onChange={filterBySearch} placeholder='search..' className=' w-full h-12 px-2 rounded bg-gray-200 my-2' />
            </div>

              {filtered.map(location => {
                return (
                  <div className='w-10/12 h-44 overflow-hidden  mx-auto bg-gray-100 max-w-3xl rounded flex flex-col justify-center my-4' key={location.id}>
                  <div className='flex flex-row justify-between '>

                      <div className='flex flex-col items-center justify-center px-1 relative max-w-3xl'>
                          <h4 className='text-slate-100 absolute left-2 object-center drop-shadow-lg bg-black bg-opacity-30 rounded ml-2 backdrop-blur-xs px-1 py-1'>{location.title}</h4>
                          <img className='w-full h-full ' src={`http://127.0.0.1:8000/storage/${location.image_path}`} />
                          {/* <p className='text-xs text-gray-400'>{location.description}</p> */}
                      </div>

                      {/* <div onClick={() => deleteLocation(location.id)} className='w-12 h-12 bg-red-100 flex justify-center items-center'>
                          <button className='text-xs font-semibold text-red-500'>DEL</button>
                      </div> */}

                  </div>

                  
              </div>
                )
              })}
          </section>
        )
      }


        return (
          <section className='w-full'>
            <div className='w-96 bg-grey-200 mx-auto'>
                <input onChange={filterBySearch} placeholder='search..' className=' w-full h-12 px-2 space-y-4 rounded bg-gray-200 my-2 max-w-3xl' />
            </div>

              {locations.map(location => {
                return (
                    <div className='w-10/12 h-44 overflow-hidden  mx-auto bg-gray-100 max-w-3xl rounded flex flex-col justify-center my-4' key={location.id}>
                        <div className='flex flex-row justify-between '>

                            <div className='flex flex-col items-center justify-center px-1 relative max-w-3xl'>
                                <h4 className='text-slate-100 absolute left-2 object-center drop-shadow-lg bg-black bg-opacity-30 rounded ml-2 backdrop-blur-xs px-1 py-1'>{location.title}</h4>
                                <img className='w-full h-full ' src={`http://127.0.0.1:8000/storage/${location.image_path}`} />
                                {/* <p className='text-xs text-gray-400'>{location.description}</p> */}
                            </div>

                            {/* <div onClick={() => deleteLocation(location.id)} className='w-12 h-12 bg-red-100 flex justify-center items-center'>
                                <button className='text-xs font-semibold text-red-500'>DEL</button>
                            </div> */}

                        </div>

                        
                    </div>
                )
              })}
          </section>
        )
    
}

export default Locations