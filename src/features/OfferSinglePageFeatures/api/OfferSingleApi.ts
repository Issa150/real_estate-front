import api from "../../../hooks/axios";
import type { PropertySingleType, ReservationRequestType } from "../OfferSingleType";


export async function getSingleOffer(id: number): Promise<PropertySingleType> {
  const response = await api.get<PropertySingleType>(`properties/${id}`);
  return response.data;
}


export async function reservationRequest(data:ReservationRequestType): Promise<void> {
  console.log('data', data)
  
  const response = await api.post(`/clients/reserving`,data);
  return response.data;
}
