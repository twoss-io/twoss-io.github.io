import { combineReducers } from 'redux'
import repos from './repos'
import slides from './slides'
import pages from './pages'
import issues from './issues'
import comment from './comment'
import user from './user'

export default combineReducers({
  pages,
  repos,
  slides,
  issues,
  comment,
  user
})
