import { useEffect, useState } from "react"
import axios from 'axios'
import apiUrl from '../apiurl'


export default function Carousel() {
  const [categories, setCategories] = useState([])
  useEffect(
    () => {
      axios(apiUrl + '/categories')
        .then(res => {
          //console.log(res)
          setCategories(res.data.response)
        })
        .catch(err => console.log(err))
    },
    []
  )
  const [counter, modify] = useState(0)
  const next = () => (counter !== categories.length - 1) ? modify(counter + 1) : modify(0)
  const prev = () => (counter !== 0) ? modify(counter - 1) : modify(categories.length - 1)

  return (
    <div className='flex justify-between  hidden md:block '>
      <div className='h-[265px]  rounded-md flex items-center relative ml-10 mr-10 mt-10' style={{ backgroundColor: categories[counter]?.color, }} >

        <img className=' ml-[6%] h-[100%] w-[15%] absolute' src={categories[counter]?.character_photo} alt='imagen1'></img>
        <img className=' ml-[28%] -mt-[60px] h-[284px] w-[189px] absolute' src={categories[counter]?.cover_photo} alt='imagen2'></img>
        <svg onClick={prev} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-[100px] h-[100px] text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
          <svg onClick={next} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ml-[90%] mr-2 w-[100px]  h-[100px] text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <div className='flex flex-col item-start justify-center w-[45%] h-auto  text-gray-100 absolute  ml-[50%]'>
          <h3 className='  font-Roboto font-bold text-2xl '>{categories[counter]?.name.toUpperCase()}</h3>
          <p className=' text-[20px] font-Roboto text-sm font-normal mt-3 mr-15' style={{ color: categories[counter]?.hover }} >{categories[counter]?.description}</p>

        </div>

      </div>
    </div>
  )
}