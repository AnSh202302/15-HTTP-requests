import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fatchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const responseData = await response.json();
      setAvailablePlaces(responseData.places);
      setIsFetching(false);
    }
    fatchPlaces();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingPText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
