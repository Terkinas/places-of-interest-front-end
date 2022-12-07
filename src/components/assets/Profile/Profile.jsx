import React, { useContext, useEffect, useState } from 'react'
import {BsTrash} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../assets/context'
import axios from 'axios'

function Profile({user, http}) {

    const { signOut } = useContext(UserContext);

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getLocations();
        getPosts();

    }, [])

    const handleLogout = () => {
        signOut();
        navigate('/')

    }

    const getPosts = async () => {
        console.log(`http://127.0.0.1:8000/api/posts/personal`)
        let response = await http.post(`http://127.0.0.1:8000/api/posts/personal`);
        console.log(response.data.posts);
        setPosts(response.data.posts);
      }

      const [locations, setLocations] = useState([]);

    const getLocations = async () => {
      console.log(`http://127.0.0.1:8000/api/locations/request`);
      let response = await http.get(`http://127.0.0.1:8000/api/locations/request`);
      console.log(response.data);
      setLocations(response.data.locations);
    }

    const deletePost = (postId) => {
        http.post(`http://127.0.0.1:8000/api/posts/delete/${postId}`).then(res => {
            setPosts(res.data.posts)
        })
      }

  return (
    <section className=''>
        <div className="w-full h-44 bg-green-100 flex items-center justify-center flex-col">
            <div className='w-12 h-12 bg-green-400 rounded '></div>
            <div className='text-center my-2'>
                <h4 className='font-semibold text-sm'>{user && user.name}</h4>
                <h5 className='text-xs text-gray-400'>{user && user.email}</h5>
                <button className='py-1 px-2 shadow text-xs mt-3 rounded bg-white hover:bg-gray-100 text-red-400' onClick={handleLogout}>Atsijungti</button>
            </div>
        </div>

        <div className='w-11/12 mx-auto my-4'><h4 className='w-11/12 mx-auto text-gray-800 text-lg font-semibold'> My photos</h4></div>
        <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3'>

            {posts.map(post => {
                return (
                    <div key={post.id} className='w-11/12 mx-auto h-72 my-4'>
                <img src={`http://127.0.0.1:8000/storage/images/location/lietuva/${post.image_name}`} className='w-full h-64 bg-blue-100 rounded '></img>

                <div className='flex flex-row justify-between items-center'>
                    <div className=''>
                        <h5 className='text-sm font-semibold'>{post.image_title}</h5>
                        <h5 className='text-xs text-gray-400'> {locations[post.location_id -1].title}</h5>
                    </div>

                    <button onClick={() => deletePost(post.id)} className='w-10 h-10 rounded flex justify-center items-center'>
                        <BsTrash className='h-4 w-4 text-gray-700' />
                    </button>
                </div>
            </div>
                )
            })}
            

             
        </div>
    </section>
  )
}

export default Profile