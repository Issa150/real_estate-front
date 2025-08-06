import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import type { UserProfileType } from "../ProfileClientTypes";
import ClientInfoForm from "../forms/ClientInfoForm";
import ClientInfoDisplay from "./ClientInfoDisplay";
import type { ClientDetailsType } from "../ProfileClientTypes";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { fetchClientProfile, patchClientDetails } from "../api/ProfileClientApi";
import { useState } from "react";


export default function ProfileClientInformation() {
    const [isEditingClient, setIsEditingClient] = useState(false);
    const { id } = useParams<{ id: string }>();
    const userId = Number(id);
    const queryClient = useQueryClient();


    const {
        data,
        isLoading,
        error,
    } = useQuery<ClientDetailsType>({
        queryKey: ["clientProfile", userId],
        queryFn: () => fetchClientProfile(userId),
        enabled: !!userId && !isNaN(userId), // Only run if userId is valid
    });


    // TanStack Mutation for updating client details
    const clientMutation = useMutation({
        mutationFn: (updatedData: Partial<ClientDetailsType>) => patchClientDetails(userId, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clientProfile", userId] });
            setIsEditingClient(false); // Exit editing mode
            toast.success("Client details updated successfully! ✅"); // Success toast with react-toastify
        },
        onError: (err: Error) => {
            console.error("Failed to update client details:", err);
            toast.error(`Failed to update client details: ${err.message || "Unknown error"} ❌`); // Error toast with react-toastify
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="ml-3 text-lg text-neutral-content">Loading clinet data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-error mt-20 p-4">
                <p className="text-2xl font-bold">Oops! An error occurred.</p>
                <p className="text-lg">Failed to load client infromation: {error.message}</p>
                <p className="text-sm text-gray-500 mt-2">Please try refreshing the page.</p>
            </div>
        );
    }

    const userData: ClientDetailsType = data ?? {
        isVerifiedOwner: false,
        familyStatus: 'CELIBATAIRE',
        isHandicapped: false,
        personalIncome: 0,
        householdIncome: 0,
        isPriority: false
    };
    return (
        <>
            <div className="card bg-base-200 shadow-2xl p-6 md:p-8 border-t-4 border-secondary">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-neutral-content">Client Details</h2>
                    <button
                        className="btn btn-outline btn-sm sm:btn-md btn-secondary"
                        onClick={() => setIsEditingClient(!isEditingClient)}
                        disabled={clientMutation.isPending} // Disable button while saving
                    >
                        {isEditingClient ? "Cancel" : "Modify"}
                    </button>
                </div>
                {isEditingClient ? (
                    <ClientInfoForm
                        client={userData}
                        onSave={(data) => clientMutation.mutate(data)}
                        onCancel={() => setIsEditingClient(false)}
                        isSaving={clientMutation.isPending}
                    />
                ) : (
                    <ClientInfoDisplay client={userData} />
                )}
            </div>
        </>
    );
}