import { useQuery } from "@tanstack/react-query";
import api from "../hooks/axios";
import { useUserStore } from "../stores/useUserStore";

type UserTestType = {
  id: number,
  firstname: string,
  profilePicture: string
}
export default function HomePage() {




  return (
    <>

      <div className="">
        <h2 className="text-5xl m-10">Select a user to simulate login</h2>
        <div className="w-6/12 m-auto">
          <UserCardTest />
        </div>
      </div>
    </>
  );
}










function UserCardTest() {
  const { data } = useQuery<UserTestType[]>({
    queryKey: ['AllUsers'],
    queryFn: () => getAllUsers()

  })


  async function getAllUsers(): Promise<UserTestType[]> {
    return (await api.get('/users')).data
  }
  return (
    <div className="grid grid-cols-1 gap-2">
      {
        data?.map((user, i) => (

          <div key={i} className="flex justify-between items-center border-2 p-2 rounded-2xl border-amber-100 shadow-2xl bg-gray-800">

            <div className="flex items-center gap-3">
              <img className="w-14 rounded-full" src={`/uploads/profiles/${user.profilePicture}`} />
              <p>{user.firstname}</p>
            </div>
            <button
              onClick={() => useUserStore.getState().setUser(user)}
              className="btn">
              Select
            </button>
          </div>

        ))
      }
    </div>
  )
}