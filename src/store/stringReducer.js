const defaultState = {
    string: 'Default value'
}

const UPPER_CASE = 'UPPER_CASE'
const REVERSE = 'REVERSE'
const SLICE = 'SLICE'

export const stringReducer = (state = defaultState, action) => {
    switch (action.type){
        case UPPER_CASE:
            return {string: state.string.toUpperCase()}
        case REVERSE:
            // let newStr = ''
            // for (let i = state.string-1; i >= 0; i--){
            //     newStr += state.string[i]
            // }
            // return {string: newStr}
            return {string: state.string.split('').reverse().join('')}
        case SLICE:
            return {string: state.string.slice(0, action.payload)}
        default: 
            return state
    }
}

// Генератор Action'ов
// это обычные JS функции, которые возвращают заготовленный объект Action

export const upperCaseAction = () => ({type: UPPER_CASE})
export const reverseAction = () => ({type: REVERSE})
export const sliceAction = (payload) => ({type: SLICE, payload})
