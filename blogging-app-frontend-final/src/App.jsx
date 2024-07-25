import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home, Settings, Editor, Article, Profile, Auth } from './pages'
import { AuthRoute, GuestRoute, Navbar } from './components'

import './App.css'

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <GuestRoute path="/register" element={<Auth key="register" />} />
          <GuestRoute path="/login" element={<Auth key="login" />} />
          <AuthRoute path="/settings" element={<Settings />} />
          <AuthRoute path="/editor" element={<Editor />} />
          <Route path="/editor/:slug" element={<Editor />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/profile/:username" element={<Profile />} />
          <AuthRoute path="/@:username" element={<Profile />} />
        </Routes>
      </main>
      
    </Router>
  )
}

export default App
