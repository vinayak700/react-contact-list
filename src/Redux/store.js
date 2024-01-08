import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactReducer";

const store = configureStore({
  reducer: {
    contactReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
