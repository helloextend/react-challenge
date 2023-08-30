import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'
// import './reset.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
