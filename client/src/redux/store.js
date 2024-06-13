import { configureStore, combineReducers } from '@reduxjs/toolkit'
import  questionReducer from './questionReducer'
import { resultReducer } from './resultReducer'

// call reducers
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer
})

// create store with reducer

export default configureStore({
  reducer: rootReducer
})