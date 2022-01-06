import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { GOOGLE_MAPS_API_KEY } from "../../../utils/constants";

let localContainerStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  minHeight: "400px"
};


const MapComponent = ({ google, zoom, visible, address, containerStyle, coordinates }) => {

  const [activeMarker, setActiveMarker] = React.useState({});
  const [showingInfoWindow, setShowingInfoWindow] = React.useState(true);
  localContainerStyle = { ...localContainerStyle, ...containerStyle };

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onInfoWindowClose = flag => {
    setShowingInfoWindow(flag);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setShowingInfoWindow(false);
    }
  };

  const onMapReady = (mapProps, map) => {
    if (map) {
      map.setOptions({
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
      });
    }
  };

  return (
    <Map zoom={zoom}
         google={google}
         visible={visible}
         center={coordinates}
         onClick={onMapClicked}
         initialCenter={coordinates}
         containerStyle={localContainerStyle}
         onReady={(mapProps, map) => onMapReady(mapProps, map)}>

      <Marker
        name="Current Location"
        onClick={onMarkerClick}
        position={coordinates}/>

      <InfoWindow google={google}
                  map={google.maps}
                  marker={activeMarker}
                  mapCenter={coordinates}
                  visible={showingInfoWindow}
                  onClose={onInfoWindowClose}>
        <p>{address}</p>
      </InfoWindow>
    </Map>);
};

export default React.memo(GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapComponent));