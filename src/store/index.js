import {combineReducers, createStore} from 'redux'
import { counterReducer } from './counterReducer'
import { stringReducer } from './stringReducer'
import { usersReducer } from '../store/usersReduser'


const rootReducer = combineReducers({
   count: counterReducer,
   string: stringReducer,
   users: usersReducer
})

export const store = createStore(rootReducer)


// Структура экшена => 
// {
//     type: 'INCR',    => тип операции
//     payload: 5       => полезные данные (аналог аргументов функции для setState)
// }