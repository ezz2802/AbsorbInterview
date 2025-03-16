import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ErrorBoundary from './context/ErrorBoundary'
import { GlobalProvider } from './context/GlobalProvider'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <GlobalProvider>
        <ErrorBoundary>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </GlobalProvider>
    </>
  )
}

export default App
