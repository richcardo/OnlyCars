import { useState } from "react"
import { StyledHome } from "./styled"
import { selects as selectsMock } from "../../utils/mock"
import { CarsSection } from "../../components/CarsSection"
import { FilterSelect } from "../../components/FilterSelect"

import { Vehicle } from "../../components/Vehicle"
import { useVehicles } from "../../hooks/useVehicles"

export const Home = () => {
  const [cars, setCars] = useState<Vehicle[]>([])
  useVehicles(setCars)
  return (
    <StyledHome>
      <FilterSelect selects={selectsMock} />
      <CarsSection title={"Popular"} path={"/home"} vehicles={cars} />
    </StyledHome>
  )
}
