// import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import userReducer from './User/userSlice';
// import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import persistStore from 'redux-persist/es/persistStore';

// const  rootReducer = combineReducers({user:userReducer});

// const persistConfig = {
//     key:'root',
//     version:1,
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer)



// // export const store = configureStore({
// //     reducer: persistedReducer,
// //     middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
// //         serilizableCheck:false,
// //     }),
// // });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['REGISTER'],
//       },
//     }),
// });



// export const persistor = persistStore(store);


import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);