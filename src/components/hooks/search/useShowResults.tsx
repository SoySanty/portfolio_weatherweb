import { useState, useEffect } from "react";
import axios from "axios";

//Return the search results
const useShowResults = () => {
  const [term, setTerm] = useState<string>("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (term === "") {
      setResults([]);
      return;
    }
    const metadata = {
      limit: 6,
      access_token: process.env.REACT_APP_MAPBOX_TOKEN,
      types: "region,country,place",
    };
    axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json`, {
        params: metadata,
      })
      .then((res) => {
        const results = res.data;
        setResults(
          results.features.map((place: any) => ({
            id: place.id,
            name: place.place_name || place.text,
            position: {
              lon: place.center[0],
              lat: place.center[1],
            },
          }))
        );
      });
  }, [term]);

  return [results, setTerm];
};

export { useShowResults };
