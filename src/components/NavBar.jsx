import Display from "./Display"
import { useState } from 'react'
import logokanji from '/assets/images/kanji.png'
import logo from '/assets/images/Minga.png'
// import menu from '/assets/images/menu.png'


export default function NavBar() {

  let options = [
    { to: '/', title: "Home" },
    { to: '/', title: "Comics" },
    { to: '/', title: "My Comics" },
    { to: '/', title: "Favorites" },
    { to: '/', title: "Logout" }
  ]
  const [show, setShow] = useState(false)
  return (
    <>
      {/* sintaxis de ternario */}
    {/* {show ? <Display options={options}/> : null} */}
    {/* sintaxis  del operador logico && */}
    
          {show && <Display options={options} show={show} setShow={setShow} />}

      <nav className='flex w-full justify-between lg:items-start items-center absolute '>
        
       <svg onClick={()=>setShow(!show)} className=" w-16 h-16 mt-4 lg:mt-6 ml-4   text-orange hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
          <div className='flex justify-end'>
            <img className=' w-[150px] h-[50px] mt-8 mr-2 hidden lg:flex ' src={logo} alt='logo'></img>
            <img className=' w-[50px]  h-[45px] mt-8 mr-4 lg:mr-8 ' src={logokanji} alt='logo2'></img>
          </div>
        
      </nav>
    </>
  )
}