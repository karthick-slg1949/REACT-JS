import {createStore} from 'redux'
import { MessageReduser } from "./message/Message.reduser";
// import { composeWithDevTools } from '@redux-devtools/extension';

let store=createStore(MessageReduser)
export {store}