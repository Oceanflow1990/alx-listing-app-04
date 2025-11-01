export default function PropertyDetail({ property }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="mt-2 text-lg text-gray-800">{property.description}</p>
      <p className="text-xl font-semibold mt-4">${property.price}/night</p>
    </div>
  );
}
