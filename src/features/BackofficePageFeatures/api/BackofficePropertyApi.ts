// api.ts

import  { AxiosError } from "axios";
import api from "../../../hooks/axios";
import type { PropertyDTO } from "../types/PropertyTypes";
import type { PoropertyManyItemClientType } from "../../OffersPageFeatures/propertyTypes";

export async function getAllPropertiesForAnAgent(userId: number): Promise<PoropertyManyItemClientType[]> {
  
  const res =  await api.get(`/properties/agent/${userId}`).then((res) => res.data);
  return res;
}
  

export const saveProperty = async (data: PropertyDTO): Promise<void> => {
  
  console.log("data send:",data);
  try {
    const response = await api.post(`/properties`, data);
    console.log("Response data back:",response);
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
