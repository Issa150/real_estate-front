import api from "../../../hooks/axios";
import type { PropertySingleType } from "../OfferSingleType";


export async function getSingleOffer(id: number): Promise<PropertySingleType> {
  const response = await api.get<PropertySingleType>(`properties/${id}`);
  return response.data;
}
