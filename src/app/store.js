import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../features/common/headerSlice";

const combinedReducer = {
  header: headerSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
