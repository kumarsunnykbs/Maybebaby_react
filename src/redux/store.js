// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "@redux-saga/core";
// import rootReducer from "./rootReducer";
// // import sagaFun from "./metaAuth/metaSaga";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootSaga from "./saga";
// import thunk from 'redux-thunk';
// import imageReducer from "./familyData/reducer";
// const persistConfig = {
//     key: 'root',
//     storage,
//     // whitelist: ['fatherImage', 'motherImage', 'childImages'],
//   };
//  const persistedReducer = persistReducer(persistConfig, rootReducer);
// const SagaMiddleware =createSagaMiddleware();
// const store = configureStore({
//     // reducers: persistedReducer,
//     reducer:persistedReducer,
//     middleware:()=>[SagaMiddleware,thunk]
// });
// SagaMiddleware.run(rootSaga);
// const persistor = persistStore(store);
// export  { persistor,store};


import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import rootSaga from "./saga";
import thunk from 'redux-thunk';

const SagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [SagaMiddleware, thunk]
});
SagaMiddleware.run(rootSaga);

export default store;
