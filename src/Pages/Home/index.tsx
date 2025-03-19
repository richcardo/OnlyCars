import { useEffect, useState } from "react"
import { StyledHome } from "./styled"
import { selects as selectsMock } from "../../utils/mock"
import { CarsSection } from "../../components/CarsSection"
import { FilterSelect } from "../../components/FilterSelect"
import { apiClient } from "../../api/apiClient"
import { CarsGetRespponseDto } from "../../api/dto"
import { Vehicle } from "../../components/Vehicle"

export const Home = () => {
  const mapper = (cars: CarsGetRespponseDto[]) => {
    return cars.map((car) => {
      return {
        carID: car.id,
        name: car.model,
        type: car.type,
        image: car.image,
        isLiked: false,
        technicalData: [
          { label: "gasoline", content: `${car.tank}L` },
          { label: "steering", content: car.transmission },
          {
            label: "capacity",
            content: car.seats,
          },
        ],
        pricePerDay: car.pricePerDay.value,
        discount: car.discount,
      }
    })
  }

  const [cars, setCars] = useState<Vehicle[]>([])
  useEffect(() => {
    apiClient.get("cars").then((res) => setCars(mapper(res)))
  }, [])

  return (
    <StyledHome>
      <FilterSelect selects={selectsMock} />
      <CarsSection title={"Popular"} path={"/home"} vehicles={cars} />
    </StyledHome>
  )
}
