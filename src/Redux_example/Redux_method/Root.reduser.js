import { combineReducers } from "redux";
import { Product_reduser } from "./Product/Product.reduser";
import { MessageReduser } from "./Message/Message.reduser";

let rootreducer=combineReducers(MessageReduser,Product_reduser)

export {rootreducer}