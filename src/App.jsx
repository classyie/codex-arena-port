import React from 'react'
import Card from './assets/Components/Card'
import Footer from './assets/Components/footer'



function App() {
  return (
    <>
     <div className="flex flex-wrap items-center justify-center ">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
      <Footer/>
    </>
  )
}

export default App