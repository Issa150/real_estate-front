// src/features/BackofficePageFeatures/hooks/useFetchRequests.ts
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../../../../stores/useUserStore";
import { getAllRequestsOfAllPropertiesForAnAgent } from "../../api/BackofficeRequestsApi";

export const useFetchRequests = () => {
    const userId = useUserStore((state) => state.id);

    const queryResult = useQuery({
        queryKey: ['requests'],
        queryFn: () => getAllRequestsOfAllPropertiesForAnAgent(userId),
        enabled: !!userId,
    });

    return queryResult;
};