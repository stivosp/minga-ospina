import {  useState } from "react"
import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"
import SignIn from "./SignIn"

export default function Index({data}) {
  const [changeView, setChangeView] = useState(false)

  return (
    changeView ? (
      <>
<SignIn changeView={changeView} setChangeView={setChangeView} />

</>
   ): ( 
    
<>

<Welcome  changeView={changeView} setChangeView={setChangeView}/>
 <Carousel character_photo ={data[0].character_photo} cover_photo={data[0].cover_photo} name={data[0].name} description={data[0].description}/>

 </>
))}