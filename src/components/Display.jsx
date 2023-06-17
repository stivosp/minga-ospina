import Profile from '/public/assets/images/perfil.png'



export default function Display({ options,show,setShow }) {

    let name = 'Yellow_Team'
    let email = 'bnata190@gmail.com'
    

    return (
        <>
        <nav className="  flex flex-col absolute z-20 top-0 pt-4 left-0 h-screen w-[100%] bg-gradient-to-r from-[#FF5722] to-[#F97316] items-center lg:w-[500px]">
            <div className="w-11/12 my-2 p-3 flex  items-center">
                <img className="h-14" src={Profile} alt="profile" />
                <div className="w-full ml-5 flex flex-col font-poppins text-md mt-3">
                    <span className="font-semibold  text-gray-200">{name}</span>
                    <span className=" text-gray-200">{email}</span>    
                </div>

                <svg onClick={()=>setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="  h-20 w-20 p-2 font-bolder  text-gray-200 text-end hover:text-white -mt-10 -mr-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

               
            </div>
            {options?.map((each,index)=> 
           <input type='button' key={index} className="  font-poppins font-bold text-16 w-[358px] my-1 p-2 text-gray-100 hover:bg-white hover:text-orange hover:rounded-lg "value={each.title} /> )}
           
            </nav>
        </>
    )

}