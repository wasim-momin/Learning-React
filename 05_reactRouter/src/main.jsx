import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Home, UserParam } from './components/index.js'
import ApiCall, { apiloaderinfo } from './components/ApiCall/ApiCall.jsx'

// const router = createBrowserRouter([
//    {
//       path:'/',
//       element:<Layout />,
//       children:[
//          {
//             path:'',
//             element:<Home />
//          },
//          {
//             path:'/about',
//             element:<About />
//          },
//          {
//             path:'/contact',
//             element:<Contact />
//          },
//          {
//             path:`/user/:userId`,
//             element:<UserParam />
//          }
//       ]
//    }
// ])

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<Layout />}>
         <Route path='' element={<Home />} />
         <Route path='about' element={<About />} />
         <Route path='contact' element={<Contact />} />
         <Route path='user/:userId' element={<UserParam />} />
         <Route 
            loader={apiloaderinfo}
            path='api' 
            element={<ApiCall />} 
         />
      </Route>
   )
)


createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
