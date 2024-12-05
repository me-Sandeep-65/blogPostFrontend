import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainContainer, Login, LoginSuccess, Signup, Footer, NotFound } from '../components'
import Posts from '../moderator_components/Posts'
import MyPosts from '../components/MyPosts'
import Appbar from '../admin_components/Appbar'
import BlockList from '../moderator_components/BlockList'
import Reports from '../moderator_components/Reports'
import Moderators from '../admin_components/Moderators'

import React from 'react'

function AdminRoutes() {
  return (
    <Router>
        <Appbar />
        <Routes>
        <Route path='/login/' >
            <Route index element={ <Login /> } />
            <Route path='success' element={ <LoginSuccess /> } />
        </Route>
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/' element={ <MainContainer /> } >
            <Route index element={<Posts />} />
            <Route path='reports' element={ <Reports /> } />
            <Route path='blocklist' element={ <BlockList /> } />
            <Route path='moderators' element={ <Moderators /> } />
            <Route path='my-posts' element={ <MyPosts /> } />
            <Route path='*' element={ <NotFound /> } />
        </Route>
        </Routes>
        <Footer />  
    </Router>
  )
}

export default AdminRoutes