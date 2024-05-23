

const defaultState = {
    users: [
        {id: 101, firstName: 'Alex', age: 30},
        {id: 102, firstName: 'Steven', age: 35},
        {id: 103, firstName: 'Neena', age: 43},
        {id: 104, firstName: 'John', age: 55},
    ]
}

const REMOVE_LAST_USER = 'REMOVE_LAST_USER'
const FILTER_USER_AGE = 'FILTER_USER_AGE'

export const usersReducer = (state = defaultState, action) => {
    switch (action.type){
        case REMOVE_LAST_USER:
            return {users: state.users.slice(0, -1)}
        case FILTER_USER_AGE:
            return {users: state.users.filter(elem => elem.age > 35)}
        default: 
            return state
    }
}


export const removeLastUserAction = () => ({type: REMOVE_LAST_USER})
export const filterUserAgeAction = () => ({type: FILTER_USER_AGE})