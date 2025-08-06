import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import OffersPage from './pages/OffersPage'
import OfferSinglePage from './pages/OfferSinglePage'
import ProfileLayoutPage from './pages/ProfileLayoutPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonalInfo from './features/ProfileClientPageFeatures/routes/PersonalInfo'
import Documents from './features/ProfileClientPageFeatures/routes/Documents'
import Security from './features/ProfileClientPageFeatures/routes/Security'
import ManagedProperties from './features/ProfileClientPageFeatures/routes/ManagedProperties'
import AgentRequests from './features/ProfileClientPageFeatures/routes/AgentRequests'
import AgentDeals from './features/ProfileClientPageFeatures/routes/AgentDeals'
import ClientInfo from './features/ProfileClientPageFeatures/routes/ClientInfo'

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
            <Route index  element={<PersonalInfo />} />
            <Route path="documents" element={<Documents />} />
            <Route path="security" element={<Security />} />
            <Route path="properties" element={<ManagedProperties />} />
            <Route path="requests" element={<AgentRequests />} />
            <Route path="deals" element={<AgentDeals />} />
            <Route path="client-info" element={<ClientInfo />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
