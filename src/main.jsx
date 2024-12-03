import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { MainContainer, Login, LoginSuccess, Signup, Home, Appbar, Footer } from './components'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RecoilRoot >
    <div className='w-full h-full flex flex-col items-center bg-inherit min-w-90 min-h-96 p-2 md:py-[2vh] md:px-[10vw]'>
        <Router>
          <Appbar />
          <Routes>
            <Route path='/login/' >
              <Route path='' element={ <Login /> } />
              <Route path='success' element={ <LoginSuccess /> } />
            </Route>
            <Route path='/signup' element={ <Signup /> } />
            <Route path='/' element={ <MainContainer /> } >
              <Route path='' element={ <Home /> } />
            </Route>
          </Routes>
          <Footer />  
        </Router>
      </div>
    </RecoilRoot>
  </React.StrictMode>
)
