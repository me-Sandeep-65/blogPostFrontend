import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainContainer, Login, LoginSuccess, Signup, Posts, Appbar, Footer, NotFound } from '../components'
import MyPosts from '../components/MyPosts'

import React from 'react'

function UserRoutes() {
  return (
    <Router>
        <Appbar />
        <Routes>
          <Route path='/login/' >
              <Route path='' element={ <Login /> } />
              <Route path='success' element={ <LoginSuccess /> } />
          </Route>
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/' element={ <MainContainer /> } >
              <Route index element={<Posts />} />
              <Route path='my-posts' element={ <MyPosts /> } />
              <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />  
    </Router>
  )
}

export default UserRoutes