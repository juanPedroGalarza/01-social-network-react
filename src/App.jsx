import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Home</h1>} />
        <Route path='/feed' element={<h1>Feed</h1>} />
        <Route path='/*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
