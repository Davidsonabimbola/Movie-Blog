import React, { useEffect, useState } from 'react'
const Hero = () => {
   const [data, setData] = useState([]);
   const[background, setBackground] = useState(true)

   const changeBackgroundColor = ()=>{
    setBackground(!background)
   }
  

useEffect(()=>{
  const fetchActors = async()=>{
    try{
      const response = await fetch ("https://finalspaceapi.com/api/v0/character")
      // The data fetched can be limited to 5 just like below
      // fetch("https://finalspaceapi.com/api/v0/character?limit=5")
      const result = await response.json()
      setData(result); 
    }
    catch (error){
      console.error('Error fetching:', error)
}
  }
fetchActors()
},
[data])
// OR use this format
// useEffect(() => {
//     fetch("https://finalspaceapi.com/api/v0/character?limit=3")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div className={background?' h-auto w-full bg-gradient-to-b from-slate-600 to-gray-400 flex-col flex-wrap'
  : 
  'h-auto w-full bg-gradient-to-b from-slate-600 to-gray-400 flex-col flex-wrap opacity-70 '

}>
      <div onClick={changeBackgroundColor} className= {background? ' w-10 h-10 rounded-full bg-black right-0 top-1 p-2 justify-center flex items-center hover:contrast-less hover:cursor-pointer transition-all ease-in-out'
    
    :
    'w-10 h-10 rounded-full bg-white right-0 top-1 p-2 justify-center flex items-center hover:contrast-more: hover:cursor-pointer transition-all ease-in-out'
    }> <span className={background? 'text-slate-300': 'text-black/75'}> {background?'D':'W'}</span></div>
<div className=' flex justify-center w-auto h-auto'>
        <div className=' w-[400px] h-[400px] box-border flex mt-5'>
 <div class="grid grid-cols-3 gap-4 grid-rows-3 h-full w-full ">
  <div className= ' rounded-md border-gray-400 object-cover'>
    <img src='./images/actor1.jpg' alt='actor1' className=' h-full w-full'/>
  </div>
  <div className= ' rounded-md border-gray-400 object-cover col-span-2 row-span-3'>
    <img src='./images/actor2.jpg' alt='actor1' className=' h-full w-full'/>
  </div>
  <div className= ' rounded-md border-gray-400 object-cover row-span-2 '>
    <img src='./images/actor3.jpg' alt='actor1' className=' h-full w-full'/>
  </div>
  </div>
  </div>
  </div>
{/* the fetched data */}
  <div className=' flex-col  md:flex justify-center w-full h-auto mt-2'>
    <div className=' flex flex-wrap justify-center' >
    {data.map((character)=>(
      <div className=' justify-center flex-col rounded-lg  w-[400px] h-[400px] border-slate-950  p-2'>
        <div>
          <img src={character.img_url} alt={character.name}/>
        </div>
        <div>
          <h2>{character.name}</h2>
        </div>
      </div>
     
    ))
    }
     </div>
</div>
    </div>
  )
}
export default Hero