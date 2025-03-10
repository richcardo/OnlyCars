import { useEffect, useState } from "react"
import { StyledHome } from "./styled"
import {
  Cars,
  cars as mockCars,
  selects as selectsMock,
} from "../../utils/mock"
import { CarsSection } from "../../components/CarsSection"
import { FilterSelect } from "../../components/FilterSelect"
import { apiClient } from "../../api/apiClient"

export const Home = () => {
  const [cars, setCars] = useState<Cars>([])
  useEffect(() => {
    setCars(mockCars)
    apiClient.get("cars").then((res) => console.log(res))
  }, [])
  return (
    <StyledHome>
      <FilterSelect selects={selectsMock} />
      {cars.map(({ title, path, vehicles }) => (
        <CarsSection title={title} path={path} vehicles={vehicles} />
      ))}
    </StyledHome>
  )
}
