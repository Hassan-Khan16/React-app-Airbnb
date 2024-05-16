import './App.css'
import data from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Form from './components/Form'


function App() {
  const cardlist = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cardlist}
      </section>
      {/* <Form /> */}
    </>
  )
}

export default App
