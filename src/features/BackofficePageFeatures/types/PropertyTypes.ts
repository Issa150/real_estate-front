import type { ListingTypeEnum } from "../../OfferSinglePageFeatures/OfferSingleType";

export type PropertyType = {
    image: string[],
    title: string,
    description: string,
    author: AuthorType,


}

type AuthorType ={
    id: number,
    firstname: string,
    lastname: string,
    profilePicture: string
}

// export type StatusType = "AVAILABLE" | "UNAVAILABLE";


export type PropertyDTO ={
  description: string;
  price: number;
  // type: string;
  rooms: number;
  area: number;
  isAvailable: boolean;
  listingType: ListingTypeEnum;
  city: string;
  department: string;
  address: string;
  ownerId: number | undefined;
  agentId: number | undefined;
  agencyId: number | undefined;
}

export type PropertyFormProps ={
  mode: "create" | "edit";
  id?: string;
  initialData?: PropertyDTO;
}

