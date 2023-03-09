import { combineReducers } from "redux"
import mainReducer from '../pages/Main/reducers/main'

export default combineReducers({ main: mainReducer })