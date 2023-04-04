import { createSlice } from "@reduxjs/toolkit";
import { CoordinatesTypeValue } from "../../types/coordinates";

const initialState: CoordinatesTypeValue = {
  latitude: 0,
  longitude: 0
}

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: initialState,
  reducers: {
    addCoordinates: (state, action) => ({...state, ...action.payload})
  }
})

export const { addCoordinates } = coordinatesSlice.actions

export default coordinatesSlice.reducer