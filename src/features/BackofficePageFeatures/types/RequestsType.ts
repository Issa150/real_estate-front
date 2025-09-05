import type { PropertyType, UserInfoShortType } from "./PropertyTypes"


export type RequestsType = {
    id: number,
    property: PropertyOfRequestType,
    client: UserInfoShortType,
    status: StatusType,
    updatedAt: string,
    createdAt: string,
}
type StatusType = 'PENDING' | 'ACCEPTED' | 'REJECTED'

type PropertyOfRequestType = Pick<PropertyType,  'id' | 'address' | 'price' |'listingType'>