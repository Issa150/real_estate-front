import { useParams } from 'react-router';
import PropertyList from './PropertyList';
import DealsList from './DealsList';
import FlagsList from './FlagsList';
import PropertyForm from '../forms/PropertyForm';
import DealsForm from '../forms/DealsForm';
import FlagsForm from '../forms/FlagsForm';

type ViewStateType = 'new' | 'update' | 'delete';

export default function EntityHolder() {
  const { entity } = useParams<{ entity: string }>();
  const { viewState } = useParams<{ entity: string; viewState: ViewStateType }>();

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const useViewRender = () => {
    if (entity) {
      const capitalizedEntity = capitalizeFirstLetter(entity);

      // Mapping of entity names to their respective components
      const componentMap: { [key: string]: any } = {
        Property: {
          List: PropertyList,
          Form: PropertyForm,
          DeleteForm: PropertyForm, // Assuming you have a delete form for Property
        },
        Deals: {
          List: DealsList,
          Form: DealsForm,
          DeleteForm: DealsForm, // Assuming you have a delete form for Deals
        },
        Flags: {
          List: FlagsList,
          Form: FlagsForm,
          DeleteForm: FlagsForm, // Assuming you have a delete form for Flags
        },
      };

      // Determine which component to render
      if (!viewState) {
        // If viewState does not exist, return the List component
        const ListComponent = componentMap[capitalizedEntity]?.List;
        return ListComponent ? <ListComponent /> : null;
      }

      // If viewState is "new" or "update", return the Form component
      if (viewState === 'new' || viewState === 'update') {
        const FormComponent = componentMap[capitalizedEntity]?.Form;
        return FormComponent ? <FormComponent /> : null;
      }

      // If viewState is "delete", return the DeleteForm component
      if (viewState === 'delete') {
        const DeleteFormComponent = componentMap[capitalizedEntity]?.DeleteForm;
        return DeleteFormComponent ? <DeleteFormComponent /> : null;
      }
    }
    return null; // Return null if entity does not exist
  };

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h2>Property Management</h2>
        <button className="btn btn-primary">
          Create New
        </button>
      </div>
      <div className="p-4 bg-gray-100">
        {useViewRender()} 
      </div>
    </>
  );
}
