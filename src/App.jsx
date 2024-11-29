import React from 'react'
import Card from './assets/Components/Card'
import Footer from './assets/Components/footer'
import bannerr from './assets/imgs/bannerr.jpg'



function App() {
  return (
    <>
     <div className="flex flex-wrap items-center justify-center bg-[#F8F9FA] pb-10" >
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