import React from 'react';
import { ButtonStyle, RandButton } from '../styles/styles';

type Properties = {
    moveToRandom: (position: google.maps.LatLngLiteral) => void;
};

function randomLocationRange(lat: number, lng: number): number {
    return Math.random() * (lat - lng) + lng;
}
 

const RandomLocation: React.FC<Properties> = ({ moveToRandom }) => {
    const [disabled, setDisabled] = React.useState(false);

    return (
        <RandButton
            disabled= { disabled }
            onClick={() => {
                setDisabled(true);
                const lat = randomLocationRange(-90.0000, 90.0000);
                const lng = randomLocationRange(-180.0000, 180.0000);
                
                    setDisabled(false);
                    moveToRandom({
                        lat: lat,
                        lng: lng
                    })

            
            }}
        >
            {disabled ? <p>teleporting</p> : <p> Teleport me to somewhere random </p>}
        </RandButton>
        
    )
}

export default RandomLocation;