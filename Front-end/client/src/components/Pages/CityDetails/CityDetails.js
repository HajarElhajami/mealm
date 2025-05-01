// src/pages/CityDetails.jsx

import { useParams } from "react-router-dom";
// import cities from "../data/cities";

export default function CityDetails() {
  const { cityName } = useParams();
  const city = cities.find((c) => c.slug.toLowerCase() === cityName.toLowerCase());

  if (!city) {
    return <div className="p-6 text-center text-red-600">City not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{city.name}</h1>
      <img
        // src={city.image}
        alt={city.name}
        className="w-full h-64 object-cover rounded-xl shadow mb-6"
      />
      <p className="text-lg text-gray-700">{city.description}</p>
    </div>
  );
}
