// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice.js";
// import messageReducer from "./messageSlice.js";
// import socketReducer from "./socketSlice.js";
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// // Configuration for persisting store
// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//     // Add a blacklist to avoid persisting non-serializable data like socket
//     blacklist: ['socket'],
// };

// const rootReducer = combineReducers({
//     user: userReducer,
//     message: messageReducer,
//     socket: socketReducer,  // Add this to the blacklist
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 // Ignore non-serializable values in these actions
//                 ignoredActions: [
//                     FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
//                 ],
//                 // Ignore paths where non-serializable values may occur
//                 ignoredPaths: ['socket'],
//             },
//         }),
// });

// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import messageReducer from "./messageSlice";
import socketReducer from "./socketSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  socket: socketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore the serializable check for the `socket` action
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'socket/setSocket'],
        ignoredPaths: ['socket'], // Ignore state paths where the socket is stored
      },
    }),
});

export default store;
