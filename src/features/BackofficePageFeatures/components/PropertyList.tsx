import { useQuery } from "@tanstack/react-query";
import OfferCard from "../../../components/blocks/OfferCard";
import { useUserStore } from "../../../stores/useUserStore";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { useParams } from "react-router";
import type { PoropertyManyItemClientType } from "../../OffersPageFeatures/propertyTypes";
import { getAllPropertiesForAnAgent } from "../api/BackofficePropertyApi";

export default function PropertyList() {

    const userId = useUserStore((state) => state.id);
    const { entity } = useParams<{ entity: string }>();
    // const capitalizedEntity = entity ? entity.charAt(0).toUpperCase() + entity.slice(1) : '';
    const queryKey = ["myProperties", userId];
    const { data, isLoading, error } = useQuery({
        queryKey,
        queryFn: () => getAllPropertiesForAnAgent(userId),
        enabled: !!userId,
    });

    // 1. Manage modal state here
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<PoropertyManyItemClientType | null>(null);

    // 2. Functions to control the modal
    const handleOpenModal = (item: PoropertyManyItemClientType) => {
        setItemToDelete(item);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setItemToDelete(null);
    };

    // 3. Delete logic (using a mutation is better, but this is for demonstration)
    const handleDelete = async () => {
        console.log("Deleting item:", itemToDelete);
        handleCloseModal();
    };

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
                    <OfferCard key={item.id} item={item} /*userRole={userRole}*/ onOpenModal={handleOpenModal} />
                ))}
            </div>

            {isModalOpen && itemToDelete && (
                <DeleteModal
                    isModalOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleDelete}
                    entity={entity as string}
                    item={itemToDelete}
                    queryKey={queryKey} />
            )}
        </>
    );
}