import type { ListingTypeEnum } from "../OfferSinglePageFeatures/OfferSingleType"

export type PoropertyManyItemClientType = {
    id: number,
    price: number,
    rooms: number,
    area: number,
    listingType: ListingTypeEnum
    city: string,
    images: PropertyImagesType[]
    owner: OwnerType
}


export type PropertyImagesType = {
    id: number,
    url: string
}

type OwnerType = {
    id: number,
    firstname: string,
    lastname: string,
    profilePicture: string,
}

