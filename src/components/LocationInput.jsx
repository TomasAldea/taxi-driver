import React, { useState, useEffect } from "react";
import { track } from '@vercel/analytics';

import {
  Input,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  Typography,
} from "@material-tailwind/react";

export default function LocationInput() {
  const [originName, setOriginName] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [origin, setOrigin] = useState(false);
  const [destination, setDestination] = useState(false);
  const [originLocations, setOriginLocations] = useState([]);
  const [destinationLocations, setDestinationLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOriginList, setShowOriginList] = useState(true);
  const [showDestinationList, setShowDestinationList] = useState(true);
  const [originTimeout, setOriginTimeout] = useState(null);
  const [destinationTimeout, setDestinationTimeout] = useState(null);
  const [distanceResult, setDistanceResult] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  function closeUl(event) {
    const elemento = document.querySelector(".main-ul");
    if (elemento && !elemento.contains(event.target)) {
      setShowOriginList(false);
      setShowDestinationList(false);
    }
  }
  document.addEventListener("click", closeUl);

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

    // Si ambos inputs estan rellenados, mostramos precio y distancia
    if (origin && destination) {
      handleLocationSelection();
    }

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

    // Si ambos inputs estan rellenados, mostramos precio y distancia
    if (origin && destination) {
      handleLocationSelection();
    }

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

  // Función para conseguir la distancia entre puntos
  const handleLocationSelection = async () => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248aa735e78014e427891cbee24bfab6519&start=${origin.lon},${origin.lat}&end=${destination.lon},${destination.lat}`
      );
  
      if (!response.ok) {
        // Verificar si la respuesta no es exitosa (por ejemplo, un error HTTP 404 o 500)
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const data = await response.json();
      
      if (data.error) {
        // Verificar si la respuesta de la API contiene un error específico
        throw new Error(`Error de la API: ${data.error.message}`);
      }
  
      const realDistance = data.features[0].properties.segments[0].distance / 1000;
      setDistanceResult(realDistance.toFixed(2));
      setTotalPrice(realDistance.toFixed(2) * 1.38);
      track('Presupuesto visto');
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error(error);
      // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones apropiadas.
    }
  };
  

  return (
    <>
      <Input
        type="text"
        label="Ingrese una ubicación de origen"
        value={originName}
        onChange={(e) => {
          setOriginName(e.target.value);
          setShowOriginList(true); // Mostrar la lista de origen al escribir
        }}
      />
      <input type="hidden" id="originLatLong" value={JSON.stringify(origin)} />
      {originLocations.length > 0 && showOriginList && (
        <ul
          className="main-ul bg-white p-6 rounded-md max-h-96 overflow-auto"
          style={{ boxShadow: "0 0 20px 4px rgba(0, 0, 0, 0.41)" }}
        >
          <li className="py-2 border-b text-sabagreen-50 font-bold border-sabagreen-50 mb-4">
            Origen
          </li>
          {originLocations.map(({ lat, lon, display_name, place_id }) => (
            <li
              className="cursor-pointer my-1 border-b border-b-gray-500 pb-1 hover:text-sabagreen-100"
              onClick={() => setOriginInput(lat, lon, display_name)}
              key={place_id}
            >
              {display_name}
            </li>
          ))}
        </ul>
      )}
      <Input
        type="text"
        label="Ingrese una ubicación de destino"
        value={destinationName}
        onChange={(e) => {
          setDestinationName(e.target.value);
          setShowDestinationList(true); // Mostrar la lista de destino al escribir
        }}
      />
      <input
        type="hidden"
        id="destinationLatLong"
        value={JSON.stringify(destination)}
      />
      {loading && <p>Cargando...</p>}
      {destinationLocations.length > 0 && showDestinationList && (
        <ul
          className="main-ul bg-white p-6 rounded-md max-h-96 overflow-auto"
          style={{ boxShadow: "0 0 20px 4px rgba(0, 0, 0, 0.41)" }}
        >
          <li className="py-2 border-b text-sabagreen-50 font-bold border-sabagreen-50 mb-4">
            Destino
          </li>
          {destinationLocations.map(({ lat, lon, display_name, place_id }) => (
            <li
              className="cursor-pointer my-1 border-b border-b-gray-500 pb-1 hover:text-sabagreen-100"
              onClick={() => setDestinationInput(lat, lon, display_name)}
              key={place_id}
            >
              {display_name}
            </li>
          ))}
        </ul>
      )}

      {distanceResult && (
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3 mb-8">
              <TimelineIcon />
              <Typography className="font-bold">
                Kilómetros totales: <span className="text-sabagreen-50">{distanceResult}km</span>
              </Typography>
            </TimelineHeader>

          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography className="font-bold">
                Presupuesto aproximado: <span className="text-sabagreen-50">{totalPrice.toFixed(2)}€</span>
              </Typography>
            </TimelineHeader>

          </TimelineItem>
        </Timeline>
      )}
    </>
  );
}
