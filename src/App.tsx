import { useEffect } from 'react'
import { createBrowserRouter,createRoutesFromElements,Route,Outlet,RouterProvider } from 'react-router-dom'

import './App.css'
import Home from './Pages/HomePage/Home'
import loader from './assert/loader.gif'
import Login from './Pages/Accounts/LoginPage/Login'
import Signup from './Pages/Accounts/SignupPage/Signup'
import DashBoard from './Pages/DashBoard/DashBoard'

function App() {

  const route = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index  element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/dashboard' element={<DashBoard/>} />
        </Route>
      )
  )
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
      <div id='loader' className='w-screen h-screen flex flex-row justify-center items-center'>
        <img src={loader} alt="" />
      </div>


      {/* app body */}
      <div id='app-body' className='hidden'>
       <RouterProvider router={route} />
      </div>
    </>
  )
}

export default App


// routes display container
export const Root = ()=>{
  return (
    <>
    <Outlet/>
    </>
  )
}
