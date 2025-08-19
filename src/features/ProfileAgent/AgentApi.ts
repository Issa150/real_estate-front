
import api from "../../hooks/axios";
import type { AgentInfoType } from "./types/AgentTypes";

export async function getCurrentUserInfo(id: number): Promise<AgentInfoType> {
    const response = await api.get<AgentInfoType>(`/agent/${id}`);
    return response.data;
}