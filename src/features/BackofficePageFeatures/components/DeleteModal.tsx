import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { entitiesFromMenu } from "./MenuItemsBackoffice";
import type { PoropertyManyItemClientType } from "../../OffersPageFeatures/propertyTypes";
import { deleteEntityById } from "../api/BackofficePropertyApi";


interface DeleteModalProps {
    isModalOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    entity: string;
    item: PoropertyManyItemClientType; 
    queryKey: unknown[];
}


export default function DeleteModal({ isModalOpen, onClose, onConfirm, entity, item,queryKey }: DeleteModalProps) {
    if (!isModalOpen) {
        return null;
    }

    const queryClient = useQueryClient();
    const serverEntityPath = entitiesFromMenu.find(e => e.path === entity)?.entityName || entity;


    const mutation = useMutation({
        mutationFn: () => deleteEntityById(serverEntityPath, item.id),
        onSuccess: () => {
            console.log("entity selected:", serverEntityPath)
            queryClient.invalidateQueries({ queryKey }); 

            
            onConfirm(); // Close modal after successful deletion
            toast.success(`${entity.charAt(0).toUpperCase() + entity.slice(1)} with ID ${item.id} deleted successfully!`);
        },
        onError: (error) => {
            console.log("entity selected:", serverEntityPath)
            console.error("Error deleting item:", error);
        }
    })
    return (
        <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm Delete</h3>
                <p className="py-4">Are you sure you want to delete <strong className="text-orange-500">{entity} {item.id}</strong>?</p>
                <p className="text-sm text-gray-500">This action cannot be undone.</p>
                <div className="modal-action">
                    <button onClick={onClose} className="btn">Cancel</button>
                    <button
                        onClick={() => mutation.mutate()}
                        className="btn btn-error">
                        Delete
                    </button>
                </div>
            </div>
        </dialog>
    );
}