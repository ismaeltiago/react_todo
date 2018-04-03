import { combineReducers } from 'redux'
import todos from './todos'
import { i18nReducer } from 'redux-react-i18n'

const rootReducer = combineReducers({
  todos,
  i18n: i18nReducer
})

export default rootReducer
