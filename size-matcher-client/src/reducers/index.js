import { combineReducers } from 'redux'
import showModal from './showModal'
import items from './items'
import userSizes from './userSizes'

export default combineReducers({
  showModal,
  items,
  userSizes
})
