const {createStore} = require('redux');

const initialState = {
    age: 21
}


const myReducer = (state = initialState, action) => { //creating reducers
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += action.val;
    }

    if(action.type === 'SUBSTRACT'){
        newState.age -= action.val;
    }
    return newState;
}

const store = createStore(myReducer); //creating store


store.subscribe(()=>{
    console.log("state"+JSON.stringify(store.getState()));    
})

store.dispatch({type: 'ADD', val : 10 }); //creating action(type is one action we can take val) and dispatch

store.dispatch({type: 'ADD', val: 5 });

store.dispatch({type: 'SUBSTRACT', val: 2});

store.dispatch({type: 'ADD', val: 6});