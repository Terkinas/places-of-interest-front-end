import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Navigate
  } from "react-router-dom";
 

  const LazyAddLocation = React.lazy(() => import('./pages/AddLoctions'))



function AdminPanel({user}) {
  if(user.email = 'admin@gmail.com') {
    return (
      <div className='w-10/12 mx-auto mt-6 flex flex-col space-y-4'>
          <Link className='w-44 bg-gray-800 text-gray-50 px-5 py-2 rounded' to="/admin/addLocation">  Pridėti vietovę</Link>
          <Link className='w-44  bg-gray-800 text-gray-50 px-5 py-2 rounded' to="/admin/locations">  Vietovės</Link>
          <Link className='w-44  bg-gray-800 text-gray-50 px-5 py-2 rounded' to="/admin/posts">  Vartotojų įrašai</Link>
          {/* <Link className='w-44 h-24 bg-gray-800 text-gray-50 px-5 py-2 rounded' to="/admin/locations">  Pridėti vietovę</Link> */}
      </div>
    )
  }

  return (
    <></>
  )
  
}

export default AdminPanel