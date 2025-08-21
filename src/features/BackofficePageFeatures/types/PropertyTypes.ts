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