import api from "../../../hooks/axios";
import type { RequestsType } from "../types/RequestsType";


export async function getAllRequestsOfAllPropertiesForAnAgent(userId: number): Promise<RequestsType[] | undefined> {
    try {
        const res =  await api.get(`/requests/agent/${userId}`);
        return res.data

    }catch(e) {
        console.error("Error fetching requests:", e);
    }
}


export async function acceptRequest(requestId: number): Promise<void> {
    try {
        const res =  await api.patch(`/requests/accept/${requestId}`);
        return res.data

    }catch(e) {
        console.error("Error fetching requests:", e);
    }
}


export async function rejectRequest(requestId: number): Promise<void> {
    try {
        const res =  await api.patch(`/requests/reject/${requestId}`);
        return res.data

    }catch(e) {
        console.error("Error fetching requests:", e);
    }
}