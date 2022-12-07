import React, { useState, useEffect } from 'react'

import {BsTrash} from 'react-icons/bs'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

function Feed(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        props.http.post(`/api/posts/request`).then(res => {
            setPosts(res.data.posts)
            console.log(res.data.posts)
        })
    }

    // const PostsElement = () => (
    //     <>
    //         {posts != undefined && posts.map((post) => {
    //                 return (
    //                     <div className='w-11/12 h-72  bg-red-100 rounded'>
    //                         {post.title}
    //                     </div>
    //                 )
    //         })}
    //     </>
    // )

    const PostsDisplay = () => {
        if(posts) {
            posts.map(post => {
                return (
                    <div className='w-11/12 h-72  bg-blue-100 rounded'>
                        111
                    </div>
                )
            })
           
        }
    }

  return (
    <section>
        <div className='w-11/12 mx-auto flex flex-col text-left md:text-center my-12'>
            <h4 className='font-semibold text-xl sm:text-3xl'>Explore user's adventures</h4>
            <h4 className='text-gray-400 text-sm sm:text-md'>See others pictures</h4>
        </div>
            <div className='w-11/12 masonry sm:masonry-sm md:masonry-md space-y-12 mx-auto'>

                {/* {posts != undefined && posts.map(post => {
                    return (
                        <h4>{post.title}</h4>
                    )
                })} */}



                {posts && posts.map(post => {
                    let heeight = post.id % 3 == 1 ? 96 : 'full';
                return (
                    <div key={post.id} className={`w-11/12 mx-auto flex flex-col h-${heeight}  rounded whitespace-nowrap`}>
                        <div className={`w-full h-3/5   overflow-hidden rounded`}>
                            <div className='h-fit w-full object-center'>
                            <img className='relative h-full w-full object-center object-contain' src={`http://127.0.0.1:8000/storage/images/location/lietuva/${post.image_name}`} />

                            </div>

                            
                        </div>
                        <div className='whitespace-nowrap h-1/5 flex flex-row justify-between mt-1 mx-1'>
                                <div>
                                    <h4 className='text-sm '>{post.image_title}</h4>
                                </div>
                                <div>
                                    <h4><AiOutlineHeart /></h4>
                                </div>
                            </div>
                    </div>
                )
            })}
                
                {/* <div className='w-11/12 h-72  bg-red-100 rounded'>
                    1
                </div>

                <div className='w-11/12 h-72  bg-blue-100 rounded'>
                    2
                </div>

                <div className='w-11/12 h-64 bg-green-100 rounded'>
                    3
                </div>

                <div className='w-11/12 h-96  bg-red-100 rounded'>
                    1
                </div>

                <div className='w-11/12 h-44  bg-blue-100 rounded'>
                    2
                </div>

                <div className='w-11/12 h-72 bg-green-100 rounded'>
                    3
                </div>

                <div className='w-11/12 h-44  bg-red-100 rounded'>
                    1
                </div>

                <div className='w-11/12 h-96  bg-blue-100 rounded'>
                    2
                </div>

                <div className='w-11/12 h-72 bg-green-100 rounded'>
                    3
                </div> */}

            </div>
    </section>
  )
}

export default Feed