import React, { useState, useEffect } from 'react'

function PostsList({user, http}) {
    
    const [posts, setPosts] = useState([]);
    const [filtered, setFiltered] = useState();
    const [status, setStatus] = useState();
   

    useEffect(() => {
       getLocations(); 
    }, [])

    const getLocations =  () => {
         http.post(`http://127.0.0.1:8000/api/posts/adminRequest`).then(res => {
            setPosts(res.data.posts)
            console.log(res.data)
          
            // console.log(`127.0.0.1:3000/storage/images/location/lietuva/${posts[0].image_name}`);
        })
    }


    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...posts];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFiltered(updatedList);
      };

    const deletePost = (e) => {
        http.post(`api/posts/delete/${e}`).then(res => {
            console.log(res.data)
            setStatus(res.data.status)
            getLocations();
            
        })
    }

    
    
      if(filtered) {
        return (
            <section className='w-full'>
            <div className='w-10/12 mx-auto'>
                <input onChange={filterBySearch} placeholder='search..' className=' w-full h-12 px-2 rounded bg-gray-200 my-2' />
            </div>

              {filtered.map(post => {
                return (
                    <div className='w-10/12 h-12 mx-auto bg-gray-100 flex flex-col my-4' key={post.id}>
                        <div className='flex flex-row justify-between'>

                            <div className='flex flex-col px-1'>
                                
                            </div>

                            <div onClick={() => deletePost(post.id)} className='w-12 h-12 bg-red-100 flex justify-center items-center'>
                                <button className='text-xs font-semibold text-red-500'>DEL</button>
                            </div>

                        </div>

                        
                    </div>
                )
              })}
          </section>
        )
      }


      if(posts.length > 0) {
        return (
          <section className='w-full'>
            <div className='w-10/12 mx-auto'>
                <input onChange={filterBySearch} placeholder='search..' className=' w-full h-12 px-2 rounded bg-gray-200 my-2' />
            </div>

              {posts.map(post => {
                return (
                    <div className='w-10/12 h-96 mx-auto flex flex-col my-4' key={post.id}>

                        <div className='flex flex-row justify-between h-screen overflow-hidden bg-gray-100 rounded-lg'>
                            {/* <img className='w-1/2 h-32' src={`http://127.0.0.1:8000/storage/images/location/lietuva/091659-image-XFRy8f71jH.jpg`} alt='not found'  /> */}
                            <img className='w-2/3 mx-auto sm:w-2/3 h-4/5 max-h-full object-contain' src={`http://127.0.0.1:8000/storage/images/location/lietuva/${post.image_name}`}  />
                        

                        <div className='flex flex-col space-y-4 my-3 w-2/3 mx-auto'>

                            <div className='flex flex-col px-1'>
                                <h4>{post.image_title}</h4>
                                <h4 className='text-xs text-gray-400'>{post.image_name}</h4>
                            </div>

                            <div onClick={() => deletePost(post.id)} className='w-12 h-12 bg-red-100 flex justify-center items-center'>
                                <button className='text-xs font-semibold text-red-500'>DEL</button>
                            </div>

                        </div>

                        </div>

                        
                    </div>
                )
              })}
          </section>
        )
      }

      return (
        <div><p>Loading...</p></div>
      )
        
    
}

export default PostsList