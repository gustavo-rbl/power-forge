import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import mapMarker from "../../assets/svg/mapMarker.svg";

// style
import "leaflet/dist/leaflet.css";

function LeafLetMap() {
  const mapGeoLocation = {
    center: { latitude: 51.505, longitude: -0.09 },
    marker: {
      position: { latitude: 51.505, longitude: -0.09 },
      popUp: "Come visit us",
    },
  };

  const mapIcon = new Icon({
    iconUrl: mapMarker,
    iconSize: [40, 40], // icon size
  });

  return (
    <MapContainer
      center={[mapGeoLocation.center.latitude, mapGeoLocation.center.longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          mapGeoLocation.marker.position.latitude,
          mapGeoLocation.marker.position.longitude,
        ]}
        icon={mapIcon}
      >
        <Popup>
          <h2>{mapGeoLocation.marker.popUp}</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafLetMap;
