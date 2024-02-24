'use client'

import { ListingCardData, ListingCardItem } from '@/app/types/app';
import { useState } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';


const Map = ({ListingCardItems} : {ListingCardItems:ListingCardData}) => {

    const coordinate = ListingCardItems.map((card) => ({
        longitude: card.long,
        latitude: card.lat,
    }))

    const center = getCenter(coordinate) as {
        longitude: number;
        latitude: number;
      };

      const [selectedLocation, setSelectedLocation] =
      useState<ListingCardItem | null>(null);

    const [viewPort , setViewPort] = useState({
        width: '100%',
        height: '100%',
        zoom: 10,
        longitude: center.longitude,
        latitude: center.latitude,

    })
  return (
    <MapGL { ...viewPort } 
    mapStyle="mapbox://styles/mapbox/light-v10"
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN}
    onMove={(nextViewport) =>
        setViewPort((prev) => {
          return {
            ...prev,
            longitude: nextViewport.viewState.longitude,
            latitude: nextViewport.viewState.latitude,
          };
        })
      }
    >
    {ListingCardItems.map((card) => (
        <div key={card.long}>
          <Marker longitude={card.long} latitude={card.lat}>
            <div
              onClick={() => setSelectedLocation(card)}
              className='animate-bounce'
            >
              <Image
                src='/mapMarker.png'
                alt='map-marker'
                width={24}
                height={24}
              />
            </div>
          </Marker>
          {selectedLocation?.long === card.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={card.long}
              latitude={card.lat}
            >
              {card.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </MapGL>
  )
}

//mapbox://mapbox.mapbox-streets-v8
//pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ
//pk.eyJ1Ijoia2FyZWVtMjAwMnNoaW1lcyIsImEiOiJjbDluYWkwMDAwNThqM3JuemUxNno4dnYxIn0.x501sqY7UshPMYiisILjZg

export default Map