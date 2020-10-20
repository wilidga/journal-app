import { createStore, combineReducers} from  'redux'
import { authReducer } from '../reducers/authReducer';


const reducer = combineReducers({
  keys:authReducer,
})

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


