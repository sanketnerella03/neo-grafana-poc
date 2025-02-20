import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import { initializeFaro } from '@grafana/faro-react';

initializeFaro({
  // required: the URL of the Grafana collector
  url: 'https://faro-collector-prod-ap-south-1.grafana.net/collect/812c7fa768b898352ce71ce7db2587f4',

  // required: the identification label of your application
  app: {
    name: 'neo-grafana-poc',
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
