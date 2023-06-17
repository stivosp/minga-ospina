import Main from './layouts/Main'
import Index from './pages/Index'

function App() {

  let data = [{
    name: 'Shonen',
    character_photo: '/assets/images/imagenA.png',
    cover_photo: '/assets/images/imagenB.png',
    description: 'Is the manga that is aimed at adolescent boys. They are series with large amounts of actions, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out!'

  }]
  return (
    <>
      <Main>
        <Index data={data} />
      </Main>
    </>
  )
}
export default App

