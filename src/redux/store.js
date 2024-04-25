import { configureStore } from "@reduxjs/toolkit"
import { contactsReducer } from './contacts/slice'
import { filtersReducer } from './filters/slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const phoneBookPersistConfig = {
  key: "phoneBook",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(phoneBookPersistConfig, contactsReducer),
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
    
export const persistor = persistStore(store);