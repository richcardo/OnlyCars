import "./App.css"
import { Route, Routes } from "react-router"
import { MainLayout } from "./Layout/MainLayout"
import { Home } from "./Pages/Home"
import { NavBar } from "./components/Navbar"
import { APP_ROUTES } from "./utils/appRoutes"
import { Rating } from "./components/Rating"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.FILTERS} element={<Rating rate={0} />} />
        <Route path={APP_ROUTES.FORM} element={<App />} />
        <Route path="/" element={<NavBar />} />
      </Route>
    </Routes>
  )
}

export default App
