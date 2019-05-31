const {createStore} = require('redux');

const initialState = {
    age: 21
}


const myReducer = (state = initialState, action) => { //creating reducers
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += 1;
    }

    if(action.type === 'SUBSTRACT'){
        newState.age -= 1;
    }
    return newState;
}

const store = createStore(myReducer); //creating store


store.subscribe(()=>{
    console.log("state"+JSON.stringify(store.getState()));    
})

store.dispatch({type: 'ADD'}); //creating action(type is one action we can take val) and dispatch

store.dispatch({type: 'ADD'});

store.dispatch({type: 'SUBSTRACT'});

store.dispatch({type: 'ADD'});