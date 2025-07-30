import api from "../hooks/axios";
import type { CurrentUserType } from "../types/UserType";

export async function getCurrentUserInfo(id: number): Promise<CurrentUserType> {
    const response = await api.get<CurrentUserType>(`/users/me/${id}`);
    console.log('⭐⭐ Current user info:', response.data)
    return response.data;
}