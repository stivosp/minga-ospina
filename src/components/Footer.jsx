import footer2 from '/assets/images/Footer.svg'
import logokanji from '/assets/images/kanji.png'
import logo from '/assets/images/Minga.png'
import facebook from '/assets/images/Facebook.png'
import twitter from '/assets/images/Twitter.png'
import vimeo from '/assets/images/Vimeo.png'
import youtube from '/assets/images/Youtube.png'
import donate from '/assets/images/donate.png'
import donateb from '/assets/images/donateb.png'

export default function Footer() {
  return (
    <footer className='overflow-x-hidden'>
      <img className=" flex justify-center w-screen mt-10  hidden lg:block lg:mb-20 " src={footer2} alt='footer2'></img>

      <div className=' flex  mt-3 lg:mt-18 items-center  flex justify-between mb-2  items-center ml-2  mr-2  '>
        <div className='flex flex-col ml-4 lg:flex-row lg:ml-20'>
          <a className=" font-poppins lg:text-xl lg:ml-4 " >Home</a>
          <a className="font-poppins lg:text-xl lg:ml-10" >Mangas</a>
        </div>
        <button className=' '> <img className=" h-6 w-25 mr-4 block lg:hidden" src={donateb} alt='donateb' /></button>
      </div>

      <div className='flex justify-center items-center inset-y-1/2  lg:-mt-6 -mr-2'>
        <img className=' w-[110px] h-[50px] ' src={logo} alt='logo'></img>
        <img className=' w-6  h-6 ml-2 ' src={logokanji} alt='logo'></img>
      </div>
      <hr className="mb-3 block lg:hidden "></hr>

      <div className="flex justify-end items-center  mb-3 mr-4 lg:justify-end items-center lg:flex-col lg:ml-[70%] lg:-mt-[70px] lg:mr-4">
        <div className='flex  lg:h-[43px] lg:w-[221px] lg:justify-between'>
        <a href='https://www.facebook.com/' className=' mr-6 lg:mr-0 '><img className=" " src={facebook} alt='facebook' /></a>
        <a href='https://twitter.com/' className=' mr-6 lg:mr-0  '><img className="  " src={twitter} alt='twitter' /></a>
        <a href='https://vimeo.com/' className='mr-6 lg:mr-0  '><img className=" " src={vimeo} alt='vimeo' /></a>
        <a href='https://www.youtube.com/'><img className="  " src={youtube} alt='youtube' /></a>
        </div>
        <button className='flex justify-center items-center hidden lg:block  '> <img className=" h-[43px] w-[221px]" src={donate} alt='donate' /></button>
      </div>
      <hr className="flex justify-center items-center mb-3 hidden lg:block  w-[84%] ml-[10%] mr-[10%] mb-14 border-[1.5px] "></hr>






    </footer>
  )
}
