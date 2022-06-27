import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { maps } from '../../util/maps'

const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
    lat: -7.223594960201706, 
    lng: -39.31331556115402
};

function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: maps.key
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
            lat: -7.223594960201706, 
            lng: -39.31331556115402
        }}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      >
        <>
            <Marker 
                position={
                    {
                        lat: -7.223594960201706, 
                        lng: -39.31331556115402
                    }
                }
                //para que o usuário possa arrastar o pin para o endereço desejado
                draggable={true}
            />
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Mapa)