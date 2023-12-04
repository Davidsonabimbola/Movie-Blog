import React from 'react'

const NavBar = () => {
  return (
    <div className=' w-full h-12 flex justify-around bg-gradient-to-tr from-zinc-300 to-zinc-600 items-center border-b-2
    border-black top-0'> 
    <div className=' flex gap-2'>
    <div className=' w-5 h-5'>
        <img className=' w-full h-full' src='./images/movieBlog.png' alt='movieBlog'/>
    </div>
    <h2 className=' font-black'> The Movie <span className=' text-orange-600'>Blog</span></h2>
</div>
<div>
    <nav className='  hidden md:flex gap-2 h-12 items-center bg-zinc-500 '>
        <div className=' w-auto p-3  font-bold'><h2>Home</h2></div>
        <div className=' w-auto p-3 font-bold'><h2>Trending<br></br></h2></div>
        <div className=' w-auto p-3 font-bold'><h2>Posts</h2></div>
        <div className=' w-auto p-3 font-bold'><h2>Contact</h2></div>
</nav>
</div>
<div>

</div>
    </div>
  )
}

export default NavBar