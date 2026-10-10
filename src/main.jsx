import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const lang = document.documentElement.lang === 'ko' ? 'ko' : 'en'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App lang={lang} />
  </React.StrictMode>,
)
