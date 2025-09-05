import api from "../../../hooks/axios";


export async function getAllDealsForAnAgent(userId: number) {
  
  const res =  await api.get(`/deals/agent/${userId}`).then((res:any) => res.data);
  return res;
}