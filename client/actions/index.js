import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

export function login() {
  return { type: types.LOGIN }
}
