// api.ts

import  { AxiosError } from "axios";
import api from "../../../hooks/axios";
import type { OwnerListType, PropertyDTO } from "../types/PropertyTypes";
import type { PoropertyManyItemClientType } from "../../OffersPageFeatures/propertyTypes";

export async function getAllPropertiesForAnAgent(userId: number): Promise<PoropertyManyItemClientType[]> {
  
  const res =  await api.get(`/properties/agent/${userId}`).then((res) => res.data);
  return res;
}
  

export const saveProperty = async (data: PropertyDTO): Promise<void> => {
  
  try {
    const response = await api.post(`/properties`, data);
    return response.data;
  } catch (error: unknown) {
    // console.error("Error data send:", error);
    if (error instanceof AxiosError) {
      // console.error("Error response data:", error.response?.data);
      console.error("Failed to update user information:", error.response?.data.message);
    }
    throw error;
  }
};

export const updateProperty = async (id: string, data: PropertyDTO): Promise<void> => {


  const response = await api.patch(`/properties/${id}`,data);
  return response.data;
};

export const deleteEntityById = async (entity: string, id: number): Promise<void> => {
  const response = await api.delete(`/${entity}/${id}`);
  return response.data;
}

export const getAllOwnersList = async (): Promise<OwnerListType[]>=> {
  const response = await api.get(`/properties/all-owners`);
  return response.data;
}
