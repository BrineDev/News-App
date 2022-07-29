import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Main from './pages/Main'
import Category from './pages/Category'
const App = () => {
  return (
    <div >
      <Header />

      <SideBar />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:category' element={<Category />} />
          {/* <Route path='/news/:*' element={<h1>hello singlenewspage</h1>}/> */}
        </Routes>
    </div>    
  )
}

export default App