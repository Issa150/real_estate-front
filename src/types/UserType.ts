type RoleEnum = "AGENT" | "CLIENT" | "MANAGER" | "SUPER_ADMIN"

export type CurrentUserType = {
    id: number,
    firstname?: string,
    lastname?: string,
    profilePicture?: string,
    role?: RoleEnum
}