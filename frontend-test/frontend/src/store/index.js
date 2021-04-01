import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import karyawanReducer from './reducers/karyawanReducer'
import positionReducer from './reducers/positionReducer'

const rootReducer = combineReducers({
  karyawan: karyawanReducer,
  position: positionReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store