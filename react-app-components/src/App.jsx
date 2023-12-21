import { useState } from 'react'
import './assets/styles/main1.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Transaction from './pages/Transaction';
import Settings from './pages/Settings';
import Performance from './pages/Performance';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {

  return (
    <> 
      <BrowserRouter>
        <div className='App'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/performance' element={<Performance/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
