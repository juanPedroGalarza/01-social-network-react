import { Outlet } from "react-router-dom";

export default function MainLayout(props) {
    return (
        <>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </>
    )
}