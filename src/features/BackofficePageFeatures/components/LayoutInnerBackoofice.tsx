import { useParams } from 'react-router';


export default function LayoutInnerBackoofice() {

  const {entity} = useParams<{ entity: string }>()

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h2>Property Management</h2>
          <button className="btn btn-primary">
            Create New
          </button>
        
      </div>
      <div className="p-4">
        {entity}
      </div>
    </>
  );
}