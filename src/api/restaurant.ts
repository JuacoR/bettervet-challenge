import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_TRAVEL_API_URL as string
axios.defaults.headers['X-RapidAPI-Key'] = process.env.REACT_APP_TRAVEL_API_KEY as string
axios.defaults.headers['X-RapidAPI-Host'] = process.env.REACT_APP_TRAVEL_API_HOST as string


export const getRestaurantsByCoordinates = (
  lat: string | number,
  long: string | number,
) => {
  return axios.get('/list-by-latlng', {
    params: {
      latitude: lat,
      longitude: long,
      limit: '10',
      distance: '3',
      min_rating: '3',
      lunit: 'km',
    },
  })
}
