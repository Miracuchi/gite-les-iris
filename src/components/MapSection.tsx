import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { TbBrandDisney } from "react-icons/tb";

import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { giteAdress, gitePostalCode } from "../data/data";
import { LanguageContext } from "./LanguageContext";
import Title from "./Title";

export default function MapSection() {
  const { translations } = useContext(LanguageContext);
  console.log(MapContainer);
  const gitePosition: LatLngExpression = [
    48.86222539169887, 2.9007509907140094,
  ];

  const renderReactIcons = (reactIcon: JSX.Element | undefined) => {
    if (!reactIcon) return undefined;
    const iconHtml = renderToStaticMarkup(reactIcon);
    const icon = L.divIcon({
      html: iconHtml,
      className: "text-3xl flex justify-center ",
      iconSize: [32, 32],
      iconAnchor: [12, 24],
    });

    return icon;
  };

  const mapMarkers = [
    {
      name: "Gite les Iris",
      position: gitePosition,
      icon: <FaMapMarkerAlt />,
      adress: { adress: giteAdress, postalCode: gitePostalCode },
    },
    {
      name: "Disneyland Paris",
      position: [48.86751277780098, 2.7835715485226946],
      icon: <TbBrandDisney />,
      adress: { adress: "Boulevard du Parc", postalCode: "77700 Coupvray" },
    },
    {
      name: "Gare de Crecy la Chapelle",
      position: [48.859441348299455, 2.905707552106395],
      icon: <IoMdTrain />,
      adress: { adress: "Avenue de la Gare", postalCode: gitePostalCode },
    },
  ];

  const openMapApp = (position: LatLngExpression) => {
    let lat: number;
    let lng: number;

    if (Array.isArray(position)) {
      [lat, lng] = position;
    } else {
      lat = position.lat;
      lng = position.lng;
    }

    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Title titleSection={translations.location as string} />

      <MapContainer
        center={gitePosition}
        zoom={13}
        scrollWheelZoom={false}
        className="z-0 mx-auto h-[60vh] w-full rounded-lg shadow-lg md:h-[70vh] md:w-[70vw]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapMarkers.map((marker, i) => (
          <Marker
            key={i}
            position={marker.position as LatLngExpression}
            icon={marker.icon ? renderReactIcons(marker.icon) : undefined}
          >
            <Popup className="">
              {marker.name}
              <br />
              {marker.adress.adress && marker.adress.adress}
              <br />
              {marker.adress.postalCode}
              <br />
              Coordonnées : <br />
              <span
                onClick={() => openMapApp(marker.position as LatLngExpression)}
                className="cursor-pointer hover:underline"
              >
                {marker.position[0]}, {marker.position[1]}
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
