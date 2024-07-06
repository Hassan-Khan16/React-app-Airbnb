import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Form from './components/Form'
import { onSnapshot, addDoc } from "firebase/firestore"
import { cardsCollection } from "../firebase"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [cards, setCards] = React.useState([]);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    price: "",
    coverImg: "",
    rating: "",
    reviewCount: "",
    location: "",
    openSpots: "",
  });

  React.useEffect(() => {
    const unsubscribe = onSnapshot(cardsCollection, function (snapshot) {
      const cardsArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setCards(cardsArr)
    })
    return unsubscribe
  }, [])

  const handleSubmit = async (event, formData) => {
    event.preventDefault();
    try {
      await addDoc(cardsCollection, formData);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const cardlist = cards.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/React-app-Airbnb/">
            <Hero />
            <section className='card-list'>
              {cardlist}
            </section>
          </Route>
          <Route path="/React-app-Airbnb/create">
            <Form
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
