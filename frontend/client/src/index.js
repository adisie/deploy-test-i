import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import axios from 'axios'

import {store} from './app/store'
import './index.css'
import App from './App'

// defaults
axios.defaults.baseURL = 'https://dep-test-698v.onrender.com'
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)