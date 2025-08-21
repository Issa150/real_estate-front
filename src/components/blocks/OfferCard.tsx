
import { Link } from 'react-router';
import type { PoropertyManyItemClientType } from '../../features/OffersPageFeatures/propertyTypes';
import { useUserStore } from '../../stores/useUserStore';

// Define the expected roles for conditional rendering
export type UserRoleType = "agent" | "client" | "guest"; // Add more roles as needed

type OfferCardProps = {
    item: PoropertyManyItemClientType;
    // userRole: UserRoleType; // The role prop to conditionally render owner info
};

/**
 * Renders a single property offer card.
 * Conditionally displays owner information if the userRole is 'agent'.
 */
export default function OfferCard({ item }: OfferCardProps) {
    const imageSrc =
        item.images && item.images.length > 0 && item.images[0].url
            ? item.images[0].url
            : "/images/placeholders/default-property.webp";

    const {role} = useUserStore()

    return (
        <Link to={`/offers/${item.id}`} className="card  shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
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
                    {item.listingType.toUpperCase()}
                </p>
                <p className="text-lg font-bold text-secondary">{item.price.toLocaleString('fr-FR')} €</p>

                {/* Conditional Rendering for Agent Role */}
                {role === "AGENT" && item.owner && (
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-base-200">
                        <div className="avatar">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                                <img
                                    src={`/uploads/profiles/${item.owner.profilePicture}`}
                                    alt={`${item.owner.firstname} ${item.owner.lastname}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "/images/placeholders/profile-default.png"; // this is magic
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-neutral-content">Owner:</p>
                            <p className="text-sm text-gray-500 line-clamp-1">{item.owner.firstname} {item.owner.lastname}</p>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
}