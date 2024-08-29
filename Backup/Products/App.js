import React from 'react'
import Product from './Products/Product'
import { store } from './redux/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h3>App Component</h3><hr />
      <Product/>
      </Provider>
    </div>
  )
}

export default App