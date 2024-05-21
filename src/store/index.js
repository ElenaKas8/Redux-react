import {createStore} from 'redux'

const defaultStore = {

    count:0
}


const reducer = (store, action) => {

    switch (action.type) {
        case "INCREMENT":
            return {...store, count:store.count+1} 
        case "DECREMENT":
            return {...store, count:store.count-1} 
        default:
            return store
    }
    
}

export const store=createStore(reducer)