import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { Mobiles } from './utils/Mobiles.js'
import Error from './components/Error.jsx'
import React, { lazy, Suspense } from 'react'
const Contacts = lazy(() => import('./components/Contacts.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Shop = lazy(() => import('./components/Shop.jsx'))
const MobileDetails = lazy(() => import('./components/MobileDetails.jsx'))



const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Suspense fallback={<div>Loading...</div>}>
          <Shop data={Mobiles} />
        </Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      },
      {
        path: '/contacts',
        element: <Suspense fallback={<div>Loading..</div>}>
          <Contacts />
        </Suspense>
      },
      {
        path: "/mobile/:id",
        element: <Suspense fallback ={<div>Loading...</div>}>
          <MobileDetails />
        </Suspense>
      }
    ],
    errorElement: <Error />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerApp} />
  </StrictMode>,
)