import { useParams } from "react-router";

export default function Dashboared() {
  const { entity } = useParams<{ entity: string }>()
  return (
    <>
    <span className="text-5xl">⭐❤️</span>
      <p>Hard coded Dashboared</p>
    {entity ? entity.charAt(0).toUpperCase() + entity.slice(1) : '❌'}
    </>
  );
}