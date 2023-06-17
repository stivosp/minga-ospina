export default function SignIn({ changeView, setChangeView }) {

    return (
        <main className="flex w-full min-h-screen items-center justify-between overflow-x-hidden ">
            <img className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-cover" src="/public/assets/images/signIn.png" alt="signin" />
            <div className="flex flex-col mt-[5%] md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%]">
                <div className="flex items-center justify-center ml-10 ">
                    <img className=' w-[100px] h-[40px] mt-10 mr-2  lg:flex ' src="/public/assets/images/Minga.png" alt='logo'></img>
                    <img className=' w-[30px]  h-[30px] mt-10 mr-4 lg:mr-10  ' src="/public/assets/images/kanji.png" alt='logo2'></img>
                </div>
                <p className="font-semibold text-[32px] text-center">Welcome <span className="text-orange">back</span>!</p>
                <p className="font-semibold text-[12px]  text-center p-2">Discover manga and manwha, track your progress, have fun, read manga.</p>
                <form className="flex flex-col my-[25px]">
                    <input className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="email" id="email" placeholder="Email" />
                    <input className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="password" name="password" id="password" placeholder="Password" />
                    <input className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-xl text-white rounded-lg bg-orange" type="button" value="Sign in" />
                    <div className="">
                    <input className="font-poppins  relative  w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[48px] p-2 pl-10 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="cuenta" id="google" placeholder=" sign in whit google" />
                    
                        <img className="absolute -mt-9 ml-6" src="/public/assets/images/Google.png" alt="" />
                    
                    </div>
                </form>
                <p className="font-semibold text-[12px] mt-[12px] text-center p-2">You don't have an account yet? <span className="text-orange">Sign up</span>!</p>
                <p className="font-semibold text-[12px] text-center p-2">Go back to <span onClick={() => setChangeView(!changeView)} className="text-orange hover:text-black">Home Page</span>!</p>
            </div>
        </main>

       
    )

}