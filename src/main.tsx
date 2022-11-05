import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { store } from './app/store';
import { App } from './App'

import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
