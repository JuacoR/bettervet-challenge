import { configureStore } from "@reduxjs/toolkit";

import { Restaurant } from "../types/restaurant";
import { coordinatesSlice } from "./states/coordinates";
import { CoordinatesTypeValue } from "../types";
import { selectedRestaurantSlice } from "./states/restaurant";

export interface AppStore {
  coordinates: CoordinatesTypeValue, 
  restaurant: Restaurant, 
}

export const store = configureStore<AppStore>({
  reducer: {
    coordinates: coordinatesSlice.reducer,
    restaurant: selectedRestaurantSlice.reducer,
  }
})