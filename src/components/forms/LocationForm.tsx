import React, { useState } from 'react'

import { Button } from '../common/Button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LocationInput } from '../../types'
import { addCoordinates } from '../../redux/states/coordinates'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'

export const LocationForm = () => {

  const [valueInput, setValueInput] = useState<LocationInput>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getGeocodeWithInput = async () => {
    if(!valueInput) return
    try {
      const geocode = await geocodeByPlaceId(valueInput.value.place_id)
      let { lat, lng } = await getLatLng(geocode[0])
      dispatch(addCoordinates({latitude: lat, longitude: lng}))
    } catch (error) {
      alert('Oh! something happened')
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
