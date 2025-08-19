
import api from "../../../hooks/axios"; // Adjust path as per your project structure
import type { ClientDetailsType, /*, UserProfileType*/ 
UserGeneralInfoType} from "../ProfileClientTypes";


export async function fetchUserGeneralInfo(id: number): Promise<UserGeneralInfoType> {
    const response = await api.get<UserGeneralInfoType>(`users/info/${id}`);
    return response.data;
}
/**
 * Fetches the complete client profile by ID.
 * @param id The ID of the client to fetch.
 * @returns A Promise that resolves to the UserProfileType.
 */
export async function fetchClientProfile(id: number): Promise<ClientDetailsType> {
    const response = await api.get<ClientDetailsType>(`users/role-profile/${id}`);
    
    return response.data;
}

/**
 * Patches (updates) the common user information for a client.
 * Fields like `id`, `createdAt`, and `client` are intentionally omitted as they are not typically updated via this form.
 * @param id The ID of the client to update.
 * @param userData Partial data for the user profile (excluding client-specific fields).
 * @returns A Promise that resolves to the updated UserProfileType.
 */
export async function patchUserProfile(
    id: number,
    userData: Partial<Omit<UserGeneralInfoType, "client" | "id" | "createdAt">>
): Promise<UserGeneralInfoType> {
    console.log('Data sent:', userData)
    const response = await api.patch<UserGeneralInfoType>(`/users/${id}`, userData);
    // console.log(response)
    return response.data;
}

/**
 * Patches (updates) the client-specific details for a client.
 * @param id The ID of the client whose details to update.
 * @param clientData Partial data for the client-specific details.
 * @returns A Promise that resolves to the updated UserProfileType.
 */

export async function patchClientDetails(id: number, clientData: Partial<ClientDetailsType>): Promise<ClientDetailsType> {
  // Send clientData directly, without nesting it under a 'client' key
  const response = await api.patch<ClientDetailsType>(`/clients/${id}`, clientData);
  return response.data;
}