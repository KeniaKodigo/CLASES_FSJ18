import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-kk7iw401py4xmk0q.us.auth0.com'
    clientId='YNoWwTuHS4mmWlaWUtCtNPDiLNZjmpoY'
    redirectUri = {window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
)
