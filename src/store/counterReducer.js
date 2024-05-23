
// Задание
// Реализовать генератор экшенов для данного редьюсера
// После реализации, вызвать генераторы в компоненте Counter


const defaultState = {
    count: 0
}

const INCR = 'INCR'
const DECR = 'DECR'
const RESET = 'RESET'
const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD'
const DECR_BY_PAYLOAD = 'DECR_BY_PAYLOAD'

export const counterReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'INCR':
            return {count: state.count + 1}
        case 'DECR':
            return {count: state.count - 1}
        case 'RESET':
            return {count: 0}
        case 'INCR_BY_PAYLOAD':
            return {count: state.count + action.payload}
        case 'DECR_BY_PAYLOAD':
            return {count: state.count - action.payload}
        default: 
            return state
    }
}

export const incrAction = () => ({type: INCR})
export const decrAction = () => ({type: DECR})
export const resetAction = () => ({type: RESET})
export const incrByPayloadAction = (payload) => ({type: INCR_BY_PAYLOAD, payload})
export const decrByPayloadAction = (payload) => ({type: DECR_BY_PAYLOAD, payload})