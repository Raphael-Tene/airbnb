// @ts-nocheck
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as geolib from "geolib";
import { HiLocationMarker } from "react-icons/hi";

function MyMap({ searchResults }) {
  // transform results into coordinates

  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = geolib.getCenter(coordinates.lat);

  const [initialViewState, setInitialViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  return (
    <Map
      mapboxAccessToken={process.env.API_TOKEN}
      {...initialViewState}
      onMove={(event) => setInitialViewState(event.viewState)}
      mapStyle='mapbox://styles/agenttango/clcxtucxm001k14mwfc0r42cq'>
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker latitude={result.lat} longitude={result.long}>
            <div>
              <HiLocationMarker
                aria-label='location marker'
                size={32}
                className='animate-bounce cursor-pointer text-red-500'
                onClick={() => {
                  setLocation(result);
                }}
              />
            </div>
          </Marker>
          {/* {location.longitude === result.long ? (
            <Popup
              onClose={() => {
                setLocation([]);
              }}
              latitude={result.lat}
              longitude={result.long}>
              <p>{result.title}</p>
            </Popup>
          ) : (
            false
          )} */}
        </div>
      ))}
    </Map>
  );
}
export default MyMap;
