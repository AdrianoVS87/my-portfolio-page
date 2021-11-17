import './App.css';
import {Header} from './components/Header'
import {Banner} from './components/Banner'
import {Footer} from './components/Footer'
import {Cards} from './components/Cards'
import { useState } from 'react'

const App = () => {
  const [ cards ] = useState([
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqa_vbSweXZyrmLrSxJiUSmn9aPmxeoPUl7XKTXCMjitA1R8B0MSodi17395rXw7WqsPI&usqp=CAU",
      alt: "Metamorfose",
      name: "Metamorfose",
      site: "https://about.facebook.com/br/meta/",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISmPZvTPTChwk7xWcjw5Ncl2jtv-veLPXRQ&usqp=CAU",
      alt: "Metallica",
      name: "Metallica",
      site: "https://about.facebook.com/br/meta/",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5X6_ajA1B0MCez0irvp9M3Y-ETG_x3r3ZA&usqp=CAU",
      alt: "Alphabet",
      name: "Alphabet",
      site: "https://abc.xyz/",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqa_vbSweXZyrmLrSxJiUSmn9aPmxeoPUl7XKTXCMjitA1R8B0MSodi17395rXw7WqsPI&usqp=CAU",
      alt: "Metamorfose",
      name: "Metamorfose",
      site: "https://about.facebook.com/br/meta/",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISmPZvTPTChwk7xWcjw5Ncl2jtv-veLPXRQ&usqp=CAU",
      alt: "Metallica",
      name: "Metallica",
      site: "https://about.facebook.com/br/meta/",
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5X6_ajA1B0MCez0irvp9M3Y-ETG_x3r3ZA&usqp=CAU",
      alt: "Alphabet",
      name: "Alphabet",
      site: "https://abc.xyz/",
    },
  ])

  return (
    <>
    <Header />
    <Banner />
    <Cards cards={cards}/>
    <Footer />
    </>
  );
}

export default App;
