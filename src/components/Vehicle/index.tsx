import { useState } from "react"
import { SectionHeader } from "../SectionHeader"
import { Tag, Tags } from "../Tags"
import { StyledVehicle, VehicleFooter } from "./styled"
import { Like } from "../Like"
import { Price } from "../Price"
import { Button } from "../Button"
import { useNavigate } from "react-router"

export type Vehicle = {
  carID: string
  name: string
  type: string
  rate: number
  image: string
  isLiked: boolean
  technicalData: Tag[]
  pricePerDay: number
  isDiscounted: boolean
  discountedPrice?: number
}

type VehicleProps = {
  vehicle: Vehicle
}

export const Vehicle = ({ vehicle }: VehicleProps) => {
  const [isLiked, setLiked] = useState(vehicle.isLiked)
  const navigate = useNavigate()
  return (
    <StyledVehicle>
      <SectionHeader
        title={vehicle.name}
        rightElement={<Like isLiked={isLiked} setLiked={setLiked} />}
        subtitle={vehicle.type}
      />
      <img src={vehicle.image} />
      <Tags technicalData={vehicle.technicalData} />
      <VehicleFooter>
        <Price
          discountedPrice={
            vehicle.isDiscounted ? vehicle.pricePerDay : undefined
          }
          price={
            vehicle.isDiscounted ? vehicle.discountedPrice : vehicle.pricePerDay
          }
        />
        <Button
          className="rent"
          onClick={() => navigate(`/cars/${vehicle.carID}`)}
        >
          Rent now
        </Button>
      </VehicleFooter>
    </StyledVehicle>
  )
}
