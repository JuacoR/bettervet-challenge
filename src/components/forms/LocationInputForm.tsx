import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import { LocationInput } from '../../types'

export const LocationInputForm = () => {

  const [valueInput, setValueInput] = useState<LocationInput>()


  const handleButtonClick = async () => {
    if(valueInput) {
      await geocodeByPlaceId(valueInput.value.place_id)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng}) => {
          console.log(lat, lng)
        }) 
        .catch(err => console.error(err))
    }
  }


  return (
    <div className='location-input-form'>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        selectProps={{
          valueInput,
          onChange: setValueInput
        }}
      />
      <button type='submit' onClick={handleButtonClick}>submit</button>
    </div>
  )
}
