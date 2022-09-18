import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

document.body.insertAdjacentHTML('afterbegin', '<div id=root></div>')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
)
