import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { myrouter } from './routers/router.jsx'
import { Provider } from 'react-redux'
import { mystore } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mystore}>
      <RouterProvider router={myrouter} />
    </Provider>
  </StrictMode>,
)
