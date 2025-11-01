export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-gray-900 font-bold">${property.price}/night</p>
    </div>
  );
}
