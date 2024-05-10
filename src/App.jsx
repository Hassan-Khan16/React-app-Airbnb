import './App.css'
import data from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'


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
    </>
  )
}

export default App
