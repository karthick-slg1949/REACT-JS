import {createStore} from 'redux'
 import { composeWithDevTools } from "@redux-devtools/extension";
import { Product_reduser } from "./product/Product.reduser";

let store=createStore(Product_reduser,composeWithDevTools())

export {store}