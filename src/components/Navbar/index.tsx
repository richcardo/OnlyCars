import { Link } from "react-router"
import { APP_ROUTES } from "../../utils/appRoutes"

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={APP_ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={APP_ROUTES.FILTERS}>Filter your Car</Link>
        </li>
        <li>
          <Link to={APP_ROUTES.FORM}>FORM</Link>
        </li>
      </ul>
    </nav>
  )
}
