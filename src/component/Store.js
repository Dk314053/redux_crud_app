
import { configureStore } from "@reduxjs/toolkit";
import { userDetail } from "./userDetailsSlice";
export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});