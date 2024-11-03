
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom' 
import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Summary from './pages/Summary'
import FormPage from './pages/FormPage'
import Home from './components/Home'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/summary' element={<Summary />} />
      <Route path='/form' element={<FormPage />} />
    </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
