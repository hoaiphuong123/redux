import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootPersistConfig, rootReducer } from './rootReduces';
import { persistReducer, persistStore } from 'redux-persist';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
const persistor = persistStore(store);
const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();
export { store, persistor, useSelector, useDispatch };
