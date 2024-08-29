import React from 'react'
import Message from '../Backup/Messages/Message'
import {store} from '../Backup/REDUX/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <h1>App Component</h1><hr />
      <Message/>
      </Provider>
    </div>
  )
}

export default App