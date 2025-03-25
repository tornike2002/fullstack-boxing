"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SmallerContainer from "../../../_components/smallerContianer";

if (typeof window !== "undefined") {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
}

const mapStyle = {
  width: "100%",
  height: "700px",
};

const address = "41.5630538, 44.9716338";

const fetchGeocode = async (address: string) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch geocode data");
  }

  const data = await response.json();

  if (data && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
    };
  } else {
    throw new Error("No results found for the address");
  }
};

export default function ContactUsMap() {
  const [location, setLocation] = useState<[number, number] | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["geocode", address],
    queryFn: () => fetchGeocode(address),
  });

  useEffect(() => {
    if (data) {
      setLocation([data.lat, data.lon]);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  if (!location) return <div>No location data available</div>;

  return (
    <div style={mapStyle}>
      <SmallerContainer>
        <MapContainer center={location} zoom={13} style={mapStyle}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={location}>
            <Popup>Your specific location</Popup>
          </Marker>
        </MapContainer>
      </SmallerContainer>
    </div>
  );
}
