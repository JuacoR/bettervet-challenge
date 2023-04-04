import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/restaurant";

const initialState: Restaurant = {
  name: '',
  address: '',
  type_restaurant: '',
  image: '',
  reviews: [],
}

export const selectedRestaurantSlice = createSlice({
  name: 'selected-restaurant',
  initialState: initialState,
  reducers: {
    addRestaurant: (state, action) => ({...state, ...action.payload})
  }
})

export const { addRestaurant } = selectedRestaurantSlice.actions

export default selectedRestaurantSlice.reducer