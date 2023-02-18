import React from 'react'
import ReactDOM from 'react-dom/client'
import {Separator} from './components/Separator'
import {Sidebar} from './components/Sidebar'
import {Tweet} from './components/Tweet'
import {Header} from './components/Header'

import './global.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>,
)
