import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type MapProps = {
  coordinates: number[];
};
const Map = (props: MapProps) => {
  return (
    <MapContainer
      center={[props.coordinates[0], props.coordinates[1]]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 400, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.coordinates[0], props.coordinates[1]]}>
        <Popup>
          Our office here <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
