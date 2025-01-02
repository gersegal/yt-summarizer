
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom' 
import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import CardPage from './pages/CardPage'
import FormPage from './pages/FormPage'
import Home from './components/Home'
import Test from './pages/Test'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/form' element={<FormPage />} />
      <Route path='/card' element={<CardPage />} /> 
      <Route path='/test' element={<Test />} /> 
    </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
