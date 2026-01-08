import React from 'react'
import Navbar from './components/Navbar.jsx'
import './Style.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer.jsx'
import appStore from './utils/MobileStore.js'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default App;

