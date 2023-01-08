import {GET_QUOTES, SET_LOADING, CLEAR_QUOTES, SET_ERROR} from '../types'

const handlers = {
  [GET_QUOTES]: (state, {payload}) => ({...state, quotes: payload, loading: false, error: false}),
  [SET_LOADING]: state => ({...state, loading: true, error: false}),
  [SET_ERROR]: state => ({...state, loading: false, error: true}),
  [CLEAR_QUOTES]: state => ({...state, quotes: [], loading: false, error: false}),
  DEFAULT: state => state
}
export const poloniexReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}