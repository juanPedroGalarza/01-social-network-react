import { Navigate, Route, Routes } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Routes>
                <Route index element={<Navigate to="account" />} />
                <Route path="account" element={ <h1>Account</h1> } />
                <Route path="settings" element={ <h1>Settings</h1> } />
            </Routes>
        </div>
    )
}