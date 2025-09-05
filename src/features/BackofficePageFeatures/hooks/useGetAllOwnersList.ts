import { useQuery } from "@tanstack/react-query";
import { getAllOwnersList } from "../api/BackofficePropertyApi";

export default function useGetAllOwnersList() {


    return useQuery({
        queryKey: ["ownersList"],
        queryFn: getAllOwnersList,
    });
    
}