import api from "../../../hooks/axios";
import type { PoropertyManyItemClientType } from "../PropertyCardTypes";

export async function getAllPropertiesForClient(): Promise<PoropertyManyItemClientType[]> {
    const res = await api.get("properties/clinets");
    return res.data /*as Promise<PoropertyManyItemClientType[]>*/
} 