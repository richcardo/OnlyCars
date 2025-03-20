import { useEffect } from "react"
import { CarsGetRespponseDto } from "../api/dto"
import { apiClient } from "../api/apiClient"

export const useVehicles = <T>(setCars: T) => {
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

  useEffect(() => {
    apiClient.get("cars").then((res) => setCars(mapper(res)))
  }, [])
}
