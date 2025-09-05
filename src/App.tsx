import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import OffersPage from './pages/OffersPage'
import OfferSinglePage from './pages/OfferSinglePage'
import ProfileLayoutPage from './pages/ProfileLayoutPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonalInfo from './features/ProfilePageFeatures/routes/PersonalInfo'
import Documents from './features/ProfilePageFeatures/routes/Documents'
import Security from './features/ProfilePageFeatures/routes/Security'
import ManagedProperties from './features/ProfilePageFeatures/routes/ManagedProperties'
import AgentRequests from './features/ProfilePageFeatures/routes/AgentRequests'
import AgentDeals from './features/ProfilePageFeatures/routes/AgentDeals'
import ClientInfo from './features/ProfilePageFeatures/routes/ClientInfo'
import BackofficePageLayout from './pages/BackofficePageLayout'
import Dashboared from './features/BackofficePageFeatures/routes/Dashboared'
import EntityItems from './features/BackofficePageFeatures/routes/EntityItems'
import FormEntity from './features/BackofficePageFeatures/forms/FormEntity'
import EntityDelete from './features/BackofficePageFeatures/routes/EntityDelete'

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // Or "light", "dark" based on preferences
      />
      <Routes>

        <Route element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/offers/:id" element={<OfferSinglePage />} />

          <Route path="/profile" element={<ProfileLayoutPage />} >
            {/* sub-rotues of profile page */}
            <Route index element={<PersonalInfo />} />
            <Route path="documents" element={<Documents />} />
            <Route path="security" element={<Security />} />
            <Route path="properties" element={<ManagedProperties />} />
            <Route path="requests" element={<AgentRequests />} />
            <Route path="deals" element={<AgentDeals />} />
            <Route path="client-info" element={<ClientInfo />} />
          </Route>

          <Route path="/backoffice" element={<BackofficePageLayout />} >
            <Route index element={<Dashboared />} />

            {/* Generic dynamic routing for ALL entities */}
            <Route path=":entity" element={<EntityItems />} />
            <Route path=":entity/new" element={<FormEntity mode="create" />} />
            <Route path=":entity/edit/:id" element={<FormEntity mode="edit" />} />
            {/* <Route path=":entity/:id" element={<EntityDetail />} /> */}
            <Route path=":entity/delete/:id" element={<EntityDelete />} />
          </Route>

        </Route>


      </Routes >
    </>
  )
}

export default App
