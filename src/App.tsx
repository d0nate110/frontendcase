import React from 'react';
import {  MapsWrapper } from './styles/styles';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import CurrentLocation from './components/backButton';
import RandomLocation from './components/randomButton';
import './App.css';

const App: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "api goes here"
  })

  const mapRef = React.useRef<google.maps.Map | null>(null);

  const moveTo = (position: google.maps.LatLngLiteral) => {
    
    if (mapRef.current) {
      mapRef.current.panTo({ lat: position.lat, lng: position.lng });
      mapRef.current.setZoom(10);

    }
  }

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
  }

  const unMount = (): void => {
    mapRef.current = null;
  }

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
  
    <MapsWrapper>

      <CurrentLocation moveTo={moveTo} />
      <RandomLocation moveToRandom={moveTo} />
      
      <GoogleMap
        mapContainerStyle={{ height: '50vh', width: '30%', marginLeft: 650, marginTop: 200 }}
        center={{lat: 23.23, lng: 67.45}}
        zoom={12}
        onLoad={onLoad}
        onUnmount={unMount}
      >
      </GoogleMap>

    </MapsWrapper>  
  )
}


export default App;
