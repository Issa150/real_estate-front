import { useState } from 'react';
// import PropertyDetails from './components/PropertyDetails';
import OfferSinglePage from '../../../pages/OfferSinglePage';
import PropertyList from '../components/PropertyList';
import PropertyForm from '../forms/PropertyForm';
import { useParams } from 'react-router';

type ViewState = 'list' | 'create' | 'details' | 'edit';

export default function EntityHolder() {

  const {entity} = useParams<{ entity: string }>()
  const [currentView, setCurrentView] = useState<ViewState>('list');
  // const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  // const handleSelectProperty = (id: number) => {
  //   setSelectedPropertyId(id);
  //   setCurrentView('details');
  // };

  // const handleEditProperty = (id: number) => {
  //   setSelectedPropertyId(id);
  //   setCurrentView('edit');
  // };

  const handleCreateNew = () => {
    setCurrentView('create');
  };

  // const handleReturnToList = () => {
  //   setCurrentView('list');
  //   setSelectedPropertyId(null);
  // };

  // const renderView = () => {
  //   switch (currentView) {
  //     case 'list':
  //       return <PropertyList onDetails={handleSelectProperty} onEdit={handleEditProperty} />;
  //     case 'create':
  //       return <PropertyForm onReturnToList={handleReturnToList} />;
  //     case 'details':
  //       return selectedPropertyId && <OfferSinglePage  onEdit={handleEditProperty} />;
  //     case 'edit':
  //       return selectedPropertyId && <PropertyForm propertyId={selectedPropertyId} onReturnToList={handleReturnToList} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
      <div className="flex justify-between items-center p-4">
        {/* <h2>Property Management</h2>
         {currentView !== 'create' && (
          <button onClick={handleCreateNew} className="btn btn-primary">
            Create New
          </button>
        )}  */}
      </div>
      <div className="p-4 bg-">
        {entity} <p className='text-green-500'>List (Read)</p>
         {/* {renderView()}  */}
      </div>
    </>
  );
}