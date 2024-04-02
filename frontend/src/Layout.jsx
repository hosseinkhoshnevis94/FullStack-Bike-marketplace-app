import { Outlet } from "react-router-dom"
import NavBar from "./assets/components/NavBar/NavBar"




function Layout() {

  return (
    <div>
      <NavBar></NavBar>
      <main className="mainContainer">
      <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Layout
