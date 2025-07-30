import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import OffersPage from './pages/OffersPage'
import OfferSinglePage from './pages/OfferSinglePage'
import ProfileClientPage from './pages/ProfileClientPage'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

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
          <Route path="/profile/:id" element={<ProfileClientPage />} >
          
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
