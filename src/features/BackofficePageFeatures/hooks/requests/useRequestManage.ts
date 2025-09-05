// src/features/BackofficePageFeatures/hooks/useRequestActions.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { acceptRequest, rejectRequest } from "../../api/BackofficeRequestsApi";

export const useRequestManage = () => {
    const queryClient = useQueryClient();

    const acceptMutation = useMutation({
        mutationFn: (requestId: number) => acceptRequest(requestId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['requests'] });
            toast.success("Request accepted successfully!");
        },
        onError: (error) => {
            toast.error("Failed to accept request.");
            console.error(error);
        },
    });

    const rejectMutation = useMutation({
        mutationFn: (requestId: number) => rejectRequest(requestId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['requests'] });
            toast.success("Request rejected successfully!");
        },
        onError: (error) => {
            toast.error("Failed to reject request.");
            console.error(error);
        },
    });

    return {
        acceptRequest: acceptMutation.mutate,
        rejectRequest: rejectMutation.mutate,
        isAccepting: acceptMutation.isPending,
        isRejecting: rejectMutation.isPending,
    };
};