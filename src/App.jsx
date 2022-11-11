import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from 'react'

const MainLayout = lazy(()=>import("./layouts/MainLayout"))
const DashboardLayout = lazy(()=>import("./layouts/DashboardLayout"))
const GroupsLayout = lazy(()=>import("./layouts/GroupsLayout"))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route index element={<h1>Home</h1>} />
          <Route path='/' element={<MainLayout />}>
            <Route path='feed' element={<h1>Feed</h1>} />
            <Route path='groups/*' element={<GroupsLayout />} />
            <Route path='dashboard/*' element={<DashboardLayout />} />
          </Route>
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
