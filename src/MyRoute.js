import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Show from './context/Show'
import First from './First'
import DataFetch from './hooks/DataFetch'
import EffectHook from './hooks/EffectHook'
import IncrementDecrement from './hooks/IncrementDecrement'
import Main from './hooks/Main'
import Khagendr from './Khagendra'
import Cart from './pages/Cart'
import Deals from './pages/Deals'
import HpmePage from './pages/HpmePage'
import Login from './pages/Login'
import NavTest from './redux/reducers/NavTest'


import ThirdPage from './ThirdPage'
import FormValidation from './validation/FormValidation'

function MyRoute() {
     return (
          <Router>
               <Routes>
                    <Route path='/demo' element={<First />} />
                    <Route path='/khagendra' element={<Khagendr />} />
                    <Route path='/third' element={<ThirdPage />} />
                    <Route path='/' element={<HpmePage />} />
                    <Route path='/deals' element={<Deals />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/hooks/first' element={<IncrementDecrement />} />
                    <Route path='/hooks/effect' element={<EffectHook />} />
                    <Route path='/datafetch' element={<DataFetch />} />
                    <Route path='/props' element={<Main />} />
                    <Route path='/context' element={<Show />}/>
                    <Route path='/formvalidation' element={<FormValidation/>}/>
                    {/* redux */}
                    <Route path='/redux/first' element={<NavTest/>}/>

               </Routes>
          </Router>
     )
}

export default MyRoute