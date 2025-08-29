import type { PropertyImagesType } from "../OffersPageFeatures/propertyTypes";

type AgencyType = {
    id: number;
    postalCode: string;
    city: string;
    department: string;
    address: string;
};

export type ListingTypeEnum = "SALE" | "RENT" | undefined;
export type RequestStatusEnum = "PENDING" | "ACCEPTED" | "REJECTED";


export type PropertySingleType = {
    id: number;
    description: string;
    price: number;
    type: string; // e.g., "loft", "house", "apartment"
    rooms: boolean,
    area: boolean,
    status: RequestStatusEnum; // e.g., "AVAILABLE", "SOLD"
    listingType: ListingTypeEnum; // e.g., "SALE", "RENT"
    city: string;
    department: string;
    address: string;
    agency: AgencyType;
    images: PropertyImagesType[];
};
