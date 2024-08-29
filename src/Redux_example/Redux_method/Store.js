import {createStore}  from 'redux'
import {rootreducer} from './Root.reduser'
import { composeWithDevTools } from '@redux-devtools/extension'
let store=createStore(rootreducer,composeWithDevTools())

export{store}