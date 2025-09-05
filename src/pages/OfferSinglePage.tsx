
import { useOfferSingle } from "../features/OfferSinglePageFeatures/hooks/useOfferSingle";
import PropertyImageSlider from "../features/OfferSinglePageFeatures/components/PropertyImageSlider";
import ReserveBtn from "../components/blocks/ReserveBtn";


export default function OfferSinglePage() {
  const { data, isLoading } = useOfferSingle();


  if (isLoading || !data) {
    return <div className="flex justify-center py-10"><span className="loading loading-spinner loading-lg"></span></div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{data.city}</h2>
      <p className="text-md mb-2">{data.address}</p>
      <p className="text-lg font-semibold">{data.price.toLocaleString()} €</p>

      {/* Image Slider */}
      <PropertyImageSlider images={data.images} />


      {/* Property Details */}
      <div className="card  shadow-xl p-4">
        <p><strong>Type:</strong> {data.type}</p>
        <p><strong>Status:</strong> {data.status}</p>
        <p><strong>Listing:</strong> {data.listingType}</p>
        <p><strong>Rooms:</strong> {data.rooms}</p>
        <p><strong>Area:</strong> {data.area} m²</p>
        <p className="mt-2"><strong>Description:</strong> {data.description}</p>
        <ReserveBtn propertyId={data.id} />
        {/* <p className="mt-2"><strong>Agency:</strong> {data.agency.city}, {data.agency.address}</p>  */} {/* Uncomment if agency details are needed */}
      </div>
    </div>
  );
}
