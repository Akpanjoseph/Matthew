import { useEffect } from 'react'

import './App.css'
import Home from './Pages/HomePage/Home'
import loader from './assert/loader.gif'

function App() {

  useEffect(function () {
    const loader: any = document.getElementById('loader')
    const app_body: any = document.getElementById('app-body')
    setTimeout(() => {
      loader.style.display = "none"
      app_body.classList.remove("hidden")
    }, 4000)


  }, [])
  return (
    <>
      {/* loader */}
      <div id='loader' className='w-screen h-screen flex flex-row justify-center items-start'>
        <img src={loader} alt="" />
      </div>


      {/* app body */}
      <div id='app-body' className='hidden'>
        <Home />
      </div>
    </>
  )
}

export default App
