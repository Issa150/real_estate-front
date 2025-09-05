import { Link } from 'react-router';
import { useUserStore } from '../../stores/useUserStore';
import type { PoropertyManyItemClientType } from '../../features/OffersPageFeatures/propertyTypes';

export type UserRoleType = "agent" | "client" | "guest";

type OfferCardProps = {
    item: PoropertyManyItemClientType;
    onOpenModal: (item: any) => void;
};

export default function OfferCard({ item, onOpenModal }: OfferCardProps) {
    const userRole = useUserStore((state) => state.role);
    const userId = useUserStore((state) => state.id);

    const imageSrc =
        item.images && item.images.length > 0 && item.images[0].url
            ? item.images[0].url
            : "/images/placeholders/default-property.webp";


    return (
        <div className="card shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden">

            <figure className="h-48 overflow-hidden bg-gray-200">
                <img
                    src={imageSrc}
                    alt={`Property in ${item.city}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                        e.currentTarget.src = "/images/placeholders/default-property.webp";
                    }}
                    loading="lazy"
                />
            </figure>

            <div className="card-body p-4">
                <h3 className="card-title text-xl text-primary mb-1 line-clamp-1">{item.city}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.rooms} rooms • {item.area} m²</p>
                <p className="badge badge-outline badge-primary text-xs font-semibold mb-3">
                    {item.listingType ? item.listingType.toUpperCase() : ""}
                </p>
                <p className="text-lg font-bold text-secondary">{item.price.toLocaleString('fr-FR')} €</p>

                {/* Conditional Rendering for Agent Role */}
                <div className='flex justify-between'>
                    <Link to={`/offers/${item.id}`} className='btn hover:bg-green-500 bg-green-800'>Details</Link>
                    {userRole === "AGENT" && item.agentId === userId && (
                        <>
                            <Link to={`/backoffice/properties/edit/${item.id}`} className='btn hover:bg-blue-500 bg-blue-800'>Edit</Link>
                            <button onClick={() => onOpenModal(item)} className='btn hover:bg-red-500 bg-red-800'>Delete</button>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
}