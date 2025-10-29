import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
