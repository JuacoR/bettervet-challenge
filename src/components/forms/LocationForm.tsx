import React, { useState } from 'react'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCoordinates } from '../../redux/states/coordinates'
import { LocationInput } from '../../types'
import { Button } from '../common/Button'

export const LocationForm = () => {

  const [valueInput, setValueInput] = useState<LocationInput>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getGeocodeWithInput = async () => {
    if(!valueInput) return
    try {
      const geocode = await geocodeByPlaceId(valueInput.value.place_id)
      let { lat, lng } = await getLatLng(geocode[0])
      console.log(lat, lng)
      dispatch(addCoordinates({latitude: lat, longitude: lng}))
    } catch (error) {
      alert('Oh! something happened')
      console.log(error)
    } finally {
      navigate('/restaurants')
    }
  }

  const handleButtonSearchInputClick = () => {
    if(valueInput) {
      return getGeocodeWithInput()
    }
  }

  const handleButtonMyPositionInputClick = () => {
    try {
      navigator.geolocation.getCurrentPosition((pos) => {
        dispatch(addCoordinates({latitude: pos.coords.latitude, longitude: pos.coords.longitude}))
      })
    } catch (err) {
      alert('We were unable to obtain your position!')
    } finally {
      navigate('/restaurants')
    }
  }

  const checkInputValue = () => {
    if(!valueInput?.label) return true
    return false
  }

  return (
    <div className='location-form'>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        selectProps={{
          valueInput,
          onChange: setValueInput
        }}
      />
      <div className='location-form__buttons'>
        <Button text='Search with Input' onButtonClick={handleButtonSearchInputClick} disabled={checkInputValue()}/>
        <Button text='Search with My Position' onButtonClick={handleButtonMyPositionInputClick}/>
      </div>
    </div>
  )
}
