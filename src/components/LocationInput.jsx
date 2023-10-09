import React, { useState, useEffect } from "react";
import { calcularDistancia } from "../utils/global";

//! Temporal
const inputClass = "my-4 peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900";

function LocationInput() {
  const [originName, setOriginName] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [originLocations, setOriginLocations] = useState([]);
  const [destinationLocations, setDestinationLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOriginList, setShowOriginList] = useState(true);
  const [showDestinationList, setShowDestinationList] = useState(true);
  const [originTimeout, setOriginTimeout] = useState(null);
  const [destinationTimeout, setDestinationTimeout] = useState(null);
  const [distanceResult, setDistanceResult] = useState(null);

  useEffect(() => {
    if (originName.trim() === "") {
      setOriginLocations([]);
      return;
    }

    setLoading(true);

    if (originTimeout) {
      clearTimeout(originTimeout);
    }

    const timeoutId = setTimeout(() => {
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${originName}`
      )
        .then((response) => response.json())
        .then((data) => {
          setOriginLocations(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 500); // Esperar medio segundo después de la última pulsación de tecla

    setOriginTimeout(timeoutId);
  }, [originName]);

  useEffect(() => {
    if (destinationName.trim() === "") {
      setDestinationLocations([]);
      return;
    }

    setLoading(true);

    if (destinationTimeout) {
      clearTimeout(destinationTimeout);
    }

    const timeoutId = setTimeout(() => {
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${destinationName}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDestinationLocations(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 500); // Esperar medio segundo después de la última pulsación de tecla

    setDestinationTimeout(timeoutId);
  }, [destinationName]);

  // Función para establecer el origen seleccionado
  const setOriginInput = (lat, lon, display_name) => {
    const originData = { lat, lon };
    setOrigin(originData);
    setOriginName(display_name);
    setShowOriginList(false); // Ocultar la lista de origen después de la selección
  };

  // Función para establecer el destino seleccionado
  const setDestinationInput = (lat, lon, display_name) => {
    const destinationData = { lat, lon };
    setDestination(destinationData);
    setDestinationName(display_name);
    setShowDestinationList(false); // Ocultar la lista de destino después de la selección
  };

  // Función para manejar la selección de ubicaciones
  const handleLocationSelection = () => {
    setDistanceResult(calcularDistancia(origin.lat, origin.lon, destination.lat, destination.lon));
  };

  return (
    <div className="flex flex-col">
      <input
        className={inputClass}
        type="text"
        placeholder="Ingrese una ubicación de origen..."
        value={originName}
        onChange={(e) => {
          setOriginName(e.target.value);
          setShowOriginList(true); // Mostrar la lista de origen al escribir
        }}
      />
      <input type="hidden" id="originLatLong" value={JSON.stringify(origin)} />
      {originLocations.length > 0 && showOriginList && (
        <ul className="bg-white p-6 shadow-2xl rounded-md">
          Origen:
          {originLocations.map(({ lat, lon, display_name, place_id }) => (
            <li
              className="cursor-pointer my-1"
              onClick={() => setOriginInput(lat, lon, display_name)}
              key={place_id}
            >
              {display_name}
            </li>
          ))}
        </ul>
      )}
  
      <input
        className={inputClass}
        type="text"
        placeholder="Ingrese una ubicación de destino..."
        value={destinationName}
        onChange={(e) => {
          setDestinationName(e.target.value);
          setShowDestinationList(true); // Mostrar la lista de destino al escribir
        }}
      />
      <input type="hidden" id="destinationLatLong" value={JSON.stringify(destination)} />
  
      {loading && <p>Cargando...</p>}
      {destinationLocations.length > 0 && showDestinationList && (
        <ul className="bg-white p-6 shadow-2xl rounded-md">
          Destino:
          {destinationLocations.map(({ lat, lon, display_name, place_id }) => (
            <li
              className="cursor-pointer my-1"
              onClick={() => setDestinationInput(lat, lon, display_name)}
              key={place_id}
            >
              {display_name}
            </li>
          ))}
        </ul>
      )}
  
      <div className=" cursor-pointer" onClick={handleLocationSelection} id="totalDistance">Calcula distancia {(distanceResult) && <span className=" text-sabagreen-100">{distanceResult} Km</span>}</div>
    </div>
  );
}

export default LocationInput;


