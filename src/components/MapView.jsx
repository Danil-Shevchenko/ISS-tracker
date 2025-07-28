import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function MapView({ position }) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <Map
        center={position}
        defaultZoom={10}
        mapId="DEMO_MAP_ID"
        style={{ width: "100%", height: "100%" }}
      >
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}

export default MapView;
