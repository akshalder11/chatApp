import React from 'react'
import useLogOut from '../../hooks/useLogOut'

const Home = () => {
  const {loading, insideLogOut} = useLogOut();
  return (
    <div>
      <button className='text-white' onClick={insideLogOut}>Logout</button>
    </div>
  )
}

export default Home