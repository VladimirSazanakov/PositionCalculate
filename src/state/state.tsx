import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as priceReducer } from './reducer/reducer'


const rootReducer = combineReducers({
  price: priceReducer,

})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootSate = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];