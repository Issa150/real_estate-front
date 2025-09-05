// src/features/Backoffice/components/EntityDelete.tsx

import { useParams, useNavigate } from 'react-router';
import { useMutation,  useQueryClient } from '@tanstack/react-query';
// import { deleteEntityById/*, fetchEntityById */} from './api/backofficeApi'; // Assume you have these functions
import { toast } from 'react-toastify';
import { entitiesFromMenu } from '../components/MenuItemsBackoffice';
import { deleteEntityById } from '../api/BackofficePropertyApi';

export default function EntityDelete() {
    const { entity, id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const entityId = Number(id);

    if (!entity || isNaN(entityId)) {
        return <div className="text-center p-20">Invalid entity or ID.</div>;
    }

    const serverEntity = entitiesFromMenu.find(e => e.path === entity)?.entityName;
    console.log('serverEntity', serverEntity)

    // 1. Fetch the entity's details to display a clear confirmation message
    //   const { data, isLoading, error } = useQuery({
    //     queryKey: [entity, entityId],
    //     queryFn: () => fetchEntityById(entity, entityId),
    //     enabled: !!entityId && !isNaN(entityId),
    //   });

    // 2. Use a mutation to handle the delete operation
    const deleteMutation = useMutation({
        mutationFn: () => deleteEntityById(entity, entityId),
        onSuccess: () => {
            // Invalidate the list query to refetch it and show the updated list
            queryClient.invalidateQueries({ queryKey: [entity] });

            entity && toast.success(`${entity.charAt(0).toUpperCase() + entity.slice(1)} deleted successfully!`);
            navigate(`/backoffice/${entity}`);
        },
        onError: (err) => {
            console.error('Failed to delete entity:', err);
            toast.error(`Failed to delete: ${err.message}`);
            navigate(`/backoffice/${entity}`); // Navigate back even on error
        },
    });

    const handleDelete = () => {
        deleteMutation.mutate();
    };

    const handleCancel = () => {
        navigate(-1); // Go back to the previous page
    };

    //   if (isLoading) {
    //     return <div className="text-center p-20">Loading...</div>;
    //   }

    //   if (error) {
    //     return <div className="text-center text-error p-20">Error: {error.message}</div>;
    //   }

    // Assuming a generic display for the item's name
    //   const itemName = data?.name || data?.title || data?.email || 'this item'; 

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-6">
            <div className="card bg-base-200 shadow-xl p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-error-content text-center">Confirm Deletion</h2>

                <div className='text-lg  mb-6'>

                    <p>Are you sure you want to delete <strong className="text-error">{/*itemName*/}</strong>? </p>
                    <p>This action cannot be undone.</p>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleCancel}
                        className="btn btn-neutral"
                        disabled={deleteMutation.isPending}>
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="btn btn-error"
                        disabled={deleteMutation.isPending}>
                        {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}