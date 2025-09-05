import type { ListingTypeEnum } from "../../OfferSinglePageFeatures/OfferSingleType";

/**
 * Property Main Type (is made too late)
 */
export type PropertyType = {
  id: number,
  description: string,
  price: number,
  rooms: number,
  area: number,
  isAvailable: boolean,
  listingType: ListingTypeEnum,
  city: string,
  department: string,
  address: string,
  ownerId: number | undefined,
  agentId: number | undefined,
  createdAt: string,
  updatedAt: string,
  owner: OwnerListType
}


export type PropertyCardType = {
  image: string[],
  title: string,
  description: string,
  author: AuthorType
}

export type UserInfoShortType = {
  id: number,
  firstname: string,
  lastname: string,
  profilePicture: string
}

type AuthorType = UserInfoShortType

export type OwnerListType = UserInfoShortType

// export type StatusType = "AVAILABLE" | "UNAVAILABLE";

export type PropertyDTO = Omit<PropertyType, 'id' | 'createdAt' | 'updatedAt' | 'owner'>

// export type PropertyDTO ={
//   description: string;
//   price: number;
//   rooms: number;
//   area: number;
//   isAvailable: boolean;
//   listingType: ListingTypeEnum;
//   city: string;
//   department: string;
//   address: string;
//   ownerId: number | undefined;
//   agentId: number | undefined;
// }

export type PropertyFormProps = {
  mode: "create" | "edit";
  id?: string;
  initialData?: PropertyDTO;
}

