import React, { useState, useEffect } from 'react'

function LocationsList(props) {
    
    const [locations, setLocations] = useState([]);
    const [filtered, setFiltered] = useState();
   

    useEffect(() => {
       getLocations();
    }, [])

    const getLocations =  () => {
         props.http(`/api/locations/adminRequest`).then(res => {
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

    const deleteLocation = (e) => {
        props.http.post(`api/locations/delete/${e}`).then(res => {
            console.log(res.data)
            getLocations();
        })
    }

    
    
      if(filtered) {
        return (
            <section className='w-full'>
            <div className='w-10/12 mx-auto'>
                <input onChange={filterBySearch} placeholder='search..' className=' w-full h-12 px-2 rounded bg-gray-200 my-2' />
            </div>

              {filtered.map(location => {
                return (
                    <div className='w-10/12 h-12 mx-auto bg-gray-100 flex flex-col my-4' key={location.id}>
                        <div className='flex flex-row justify-between'>

                            <div className='flex flex-col px-1'>
                                <h4>{location.title}</h4>
                                <p className='text-xs text-gray-400'>{location.description}</p>
                            </div>

                            <div onClick={() => deleteLocation(location.id)} className='w-12 h-12 bg-red-100 flex justify-center items-center'>
                                <button className='text-xs font-semibold text-red-500'>DEL</button>
                            </div>

                        </div>

                        
                    </div>
                )
              })}
          </section>
        )
      }


        return (
          <section className='w-full'>
            <div className='w-10/12 mx-auto'>
                <input onChange={filterBySearch} placeholder='search..' className=' w-full h-12 px-2 rounded bg-gray-200 my-2' />
            </div>

              {locations.map(location => {
                return (
                    <div className='w-10/12 h-12 mx-auto bg-gray-100 flex flex-col my-4' key={location.id}>
                        <div className='flex flex-row justify-between'>

                            <div className='flex flex-col px-1'>
                                <h4>{location.title}</h4>
                                {/* <p className='text-xs text-gray-400'>{location.description}</p> */}
                            </div>

                            <div onClick={() => deleteLocation(location.id)} className='w-12 h-12 bg-red-100 flex justify-center items-center'>
                                <button className='text-xs font-semibold text-red-500'>DEL</button>
                            </div>

                        </div>

                        
                    </div>
                )
              })}
          </section>
        )
    
}

export default LocationsList