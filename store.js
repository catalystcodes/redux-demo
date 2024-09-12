import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import balanceReducer from "./balanceSlice";

//Add persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

//Adding RootReducer
const rootReducer = combineReducers({
  balance: balanceReducer,
});

// persisting our rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating our store and exporting it
export const store = configureStore({
  reducer: persistedReducer,
});
