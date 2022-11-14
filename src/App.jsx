import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

// const MainLayout = lazy(()=>delayForDemo(import("./layouts/MainLayout")))
const MainLayout = lazy(()=>import("./layouts/MainLayout"))
const DashboardLayout = lazy(()=>import("./layouts/DashboardLayout"))
const GroupsLayout = lazy(()=>import("./layouts/GroupsLayout"))

// Function with delay for testing the loading circle ♥
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress color="inherit" />}>
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
