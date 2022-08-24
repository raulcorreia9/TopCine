import { BrowserRouter, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <Outlet />
      </div>
    </>
  )
}

export default App
