import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {initProducts} from './actions/productActions'

import ProductsComponent from './components/products_component'
import './App.scss'

const store = configureStore()
store.dispatch(initProducts())

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ProductsComponent />
      </Provider>
    )
  }
}

export default App
