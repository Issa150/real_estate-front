import { useQuery } from "@tanstack/react-query";
import OfferCard from "../../../components/blocks/OfferCard";
// import type { PoropertyManyItemClientType } from "../../OffersPageFeatures/propertyTypes";
import { getAllPropertiesForAnAgent } from "../api/BackofficePropertyAPi";
import { useUserStore } from "../../../stores/useUserStore";

export default function PropertyList() {
    // Fake data entries
    // const currentItems: PoropertyManyItemClientType[] = [
    //     {
    //         id: 1,
    //         price: 250000,
    //         rooms: 3,
    //         area: 120,
    //         listingType: 'SALE',
    //         city: 'New York',
    //         images: [
    //             { id: 1, url: 'https://example.com/images/property1-1.jpg' },
    //             { id: 2, url: 'https://example.com/images/property1-2.jpg' },
    //         ],
    //         owner: {
    //             id: 1,
    //             firstname: 'John',
    //             lastname: 'Doe',
    //             profilePicture: 'https://example.com/images/owner1.jpg',
    //         }
    //     }, {
    //         id: 2,
    //         price: 1500,
    //         rooms: 2,
    //         area: 80,
    //         listingType: 'RENT',
    //         city: 'Los Angeles',
    //         images: [
    //             { id: 3, url: 'https://example.com/images/property2-1.jpg' },
    //             { id: 4, url: 'https://example.com/images/property2-2.jpg' },
    //         ],
    //         owner: {
    //             id: 2,
    //             firstname: 'Jane',
    //             lastname: 'Smith',
    //             profilePicture: 'https://example.com/images/owner2.jpg',
    //         }
    //     }
    // ];
    const userId = useUserStore((state) => state.id);
    console.log("Fetching properties for agent ID:", userId);

    const { data, isLoading, error } = useQuery({
        queryKey: ["myProperties", userId],
        queryFn: () => getAllPropertiesForAnAgent(userId),
        enabled: !!userId,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {(error as Error).message}</div>;
    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((item) => (
                    // Render the OfferCard component for each item
                    <OfferCard key={item.id} item={item} /*userRole={userRole}*/ />
                ))}
            </div>
        </>
    );
}