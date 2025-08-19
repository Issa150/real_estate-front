import {  Outlet } from "react-router";
import NavBar from "./NavBar";
import { useUser } from "../../hooks/useUser";

export default function Layout() {
    const { /* user, */ isLoading, error } = useUser();

    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>; // Show a loading state
    }
    // Handle error state
    if (error) {
        return <div>Error loading user data.</div>; // Show an error state
    }
    // If the user is not logged in, redirect to the login page
    // 🔵🔵🔵 but this Layout is not strict protecting Auth
    // if (!user) {
    //     return <Navigate to="/login" replace />;
    // }
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}