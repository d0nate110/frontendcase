import React from 'react';
import { ButtonStyle } from '../styles/styles';

type Properties = {
    moveTo: (position: google.maps.LatLngLiteral) => void;
};

const CurrentLocation: React.FC<Properties> = ({ moveTo }) => {
    const [disabled, setDisabled] = React.useState(false);

    return (
        <ButtonStyle
            disabled={disabled}
            onClick={() => {
                setDisabled(true);
                navigator.geolocation.getCurrentPosition(position => {
                    setDisabled(false);
                    const pos = { lat: position.coords.latitude, lng: position.coords.longitude };
                    moveTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })                
                })
            }}
        >
            {disabled ? <p>searching</p> : <p> Bring me back home </p>}

        </ButtonStyle>
        
    )
}

export default CurrentLocation;