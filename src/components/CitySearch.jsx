import { useState, useEffect } from "react";
import axios from "axios";

const CityInput = ({ city, setCity }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const API_KEY =
    "pk.eyJ1Ijoid2FqZWVoc2hhaWtoIiwiYSI6ImNtMzV5bno1bjA3czYyaW9qb3lpa3lsenoifQ.ZoUhye10TZXvBYt-1j0NnA";

  const fetchSuggestions = async (query) => {
    if (query.length < 3) return;

    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
        {
          params: {
            access_token: API_KEY,
            types: "place,region,country",
            autocomplete: true,
            limit: 5,
          },
        }
      );
      const results = response.data.features.map((feature) => ({
        name: feature.place_name,
        city: feature.text,
      }));
      setSuggestions(results);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    if (city) fetchSuggestions(city);
  }, [city]);

  const setDrowpdown = (city) => {
    setCity(city); // Set the selected city
    setSuggestions([]); // Clear suggestions
    setShowSuggestions(false); // Hide the dropdown after selection
  };
  const setSuggestion = (value) => {
    setCity(value);
    if (suggestions.length >= 1) setShowSuggestions(true);
  };

  return (
    <div className="city-search relative">
      <h5 className="text-base mb-2">Enter City Below</h5>
      <input
        type="text"
        value={city}
        onChange={(e) => setSuggestion(e.target.value)}
        placeholder="Enter city name"
        className="py-3 md:w-[70%] w-10/12 px-4 input bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 outline-none border border-white border-opacity-65 text-white"
      />
      {showSuggestions && (
        <ul className="suggestions absolute right-0 left-0 m-auto md:w-[70%] w-10/12 px-4 my-2 text-start bg-gray-900 rounded-md bg-clip-padding backdrop-filter  bg-opacity-40 py-2 border border-gray-100 border-opacity-25">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => setDrowpdown(suggestion.city)}>
              {suggestion.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityInput;
