import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import { i18nActions } from 'redux-react-i18n'
import dictionaries from './config/locales/dictionaries'
import languages from './config/locales/languages'

const store = createStore(reducer)

store.dispatch( i18nActions.setDictionaries( dictionaries ) )
store.dispatch( i18nActions.setLanguages( languages ) )
store.dispatch( i18nActions.setCurrentLanguage( 'pt-BR' ) )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
