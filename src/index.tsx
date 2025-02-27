/* VENDOR */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

/* APPLICATION */
import { setupStore } from './store/store'
import App from './app/App'

import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)
const store = setupStore()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
