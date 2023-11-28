// "use client";
// import Map, { Marker } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { FaLocationDot } from "react-icons/fa6";

export default function MapView() {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  return (
    <div className="w-full h-[65vh]">
      {/* <Map
        style="w-full h-full"
        mapboxAccessToken={accessToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          latitude: 31.271898,
          longitude: 32.289201,
          zoom: 15,
        }}
      >
        <Marker latitude={31.271898} longitude={32.289201}>
          <div style={{ color: "red", cursor: "pointer" }}>
            <FaLocationDot size={25} />
          </div>
        </Marker>
      </Map>
      <div className="w-full h-80"></div> */}
    </div>
  );
}
