// import {createSlice} from '@reduxjs/toolkit';
// import { updateUser } from '../../../../api/controllers/user.controllers.js';
// import { signout } from '../../../../api/controllers/auth.controllers.js';




// const initialState = {
//     currentUser:null,
//     loading:false,
//     error:false,
// };

// const userSlice =createSlice({
//     name:'user',
//     initialState,
//     reducers:{
//         signInStart:(state)=>{
//             state.loading=true;
//         },
//         signInSuccess:(state,action)=>{
//             state.currentUser=action.payload;
//             state.loading=false;
//             state.error=false;
//         },
//         signInFailure:(state,action)=>{
//             state.loading=false;
//             state.error=action.payload;
//         },
//         updateUserstart:(state)=>{
//             state.loading=true;
//         },
//         updateUserSuccess:(state,action)=>{
//             state.currentUser=action.payload;
//             state.loading=false;
//             state.error=false;
//         },
//         updateUserFailure:(state,action)=>{
//             state.loading=false;
//             state.error=action.payload;
//         },
//         deleteUserstart:(state)=>{
//             state.loading=true;
//         },
//             deleteUserSuccess:(state,action)=>{
//             state.currentUser=null;
//             state.loading=false;
//             state.error=false;
//         },
//         deleteUserFailure:(state,action)=>{
//             state.loading=false;
//             state.error=action.payload;
//         },
//         signout:(state)=>{
//             state.currentUser=null;
//             state.loading=false;
//             state.error=false;
//         },
//     },

// });

// export const{signInStart,signInSuccess,signInFailure,updateUserFailure,updateUserSuccess,updateUserstart,deleteUserstart,deleteUserSuccess,deleteUserFailure} = userSlice.actions;

// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;