import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state){
          return state.name = 'park'
        },
        increase(state, a){
            state.age += a.payload
        }
    }
});

export let {changeName, increase} = user.actions;

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ]
});

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer,
  }
});
