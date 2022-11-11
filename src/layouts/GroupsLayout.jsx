import { Route, Routes } from "react-router-dom";

export default function GroupsLayout() {
    return (
        <div>
            <h1>Groups</h1>
            <Routes>
                <Route index element={<h1>Your groups</h1>} />
                <Route path="group1" element={ <h1>Group1</h1> } />
                <Route path="group2" element={ <h1>Group2</h1> } />
            </Routes>
        </div>
    )
}