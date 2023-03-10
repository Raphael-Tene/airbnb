// @ts-nocheck
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as geolib from "geolib";
import { HiLocationMarker } from "react-icons/hi";

function MyMap({ searchResults }) {
  // transform results into coordinates
  const [location, setLocation] = useState({});
  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = geolib.getCenter(coordinates);

  const [initialViewState, setInitialViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  return (
    <Map
      mapboxAccessToken='pk.eyJ1IjoiYWdlbnR0YW5nbyIsImEiOiJjbGN4c3gwengwZnJxM29xbDQ2b3Y1NHlnIn0.ibC-Ceg1KoIBZCg6PwAcgA'
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
              />{" "}
            </div>
          </Marker>
        </div>
      ))}
    </Map>
  );
}
export default MyMap;
