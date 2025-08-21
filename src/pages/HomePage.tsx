import { useQuery } from "@tanstack/react-query";
import api from "../hooks/axios";
import { useUserStore } from "../stores/useUserStore";
import type { RoleEnum } from "../types/UserType";
import { Link, useNavigate } from "react-router";

type UserTestType = {
  id: number,
  firstname: string,
  profilePicture: string,
  role: RoleEnum
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
  const navigate = useNavigate();

  const { data } = useQuery<UserTestType[]>({
    queryKey: ['AllUsers'],
    queryFn: () => getAllUsers()

  })


  async function getAllUsers(): Promise<UserTestType[]> {
    return (await api.get('/users')).data
  }
  return (
    <div className="grid grid-cols-1 gap-2 ">
      <Link to={"/backoffice"}>Backoffice</Link>
      {
        data?.map((user, i) => (

          <div key={i} className="flex justify-between items-center border-2 p-2 rounded-2xl border-amber-100 shadow-2xl ">

            <div className="flex items-center gap-3">
              <img className="w-14 rounded-full" src={`/uploads/profiles/${user.profilePicture}`} />
              <div className="text-left grid items">
                <p>{user.firstname}</p>
                <p className="text-xs bg-slate-500 text-amber-300 py-0.5 pb-1 px-3 rounded-xl">{user.role}</p>
              </div>
            </div>
            <button
              onClick={() => {
                useUserStore.getState().setUser(user)
                navigate(`/profile`)
              }}
              className="btn">
              Select
            </button>
          </div>

        ))
      }
    </div>
  )
}