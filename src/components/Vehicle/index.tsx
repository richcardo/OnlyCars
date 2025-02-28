import { useState } from "react"
import { SectionHeader } from "../SectionHeader"
import { Tag, Tags } from "../Tags"
import { StyledVehicle, VehicleFooter } from "./styled"
import { Like } from "../Like"
import { Price } from "../Price"
import { Button } from "../Button"

export type Vehicle = {
  carID: string
  name: string
  type: string
  image: string
  isLiked: boolean
  tags: Tag[]
  pricePerDay: number
  isDiscounted: boolean
  discountedPrice?: number
}

type VehicleProps = {
  vehicle: Vehicle
}

export const Vehicle = ({ vehicle }: VehicleProps) => {
  const [isLiked, setLiked] = useState(vehicle.isLiked)
  return (
    <StyledVehicle>
      <SectionHeader
        title={vehicle.name}
        rightElement={<Like isLiked={isLiked} setLiked={setLiked} />}
        subtitle={vehicle.type}
      />
      <img src={vehicle.image} />
      <Tags tags={vehicle.tags} />
      <VehicleFooter>
        <Price
          discountedPrice={
            vehicle.isDiscounted ? vehicle.pricePerDay : undefined
          }
          price={
            vehicle.isDiscounted ? vehicle.discountedPrice : vehicle.pricePerDay
          }
        />
        <Button className="rent" onClick={() => console.log("ciao")}>
          Rent now
        </Button>
      </VehicleFooter>
    </StyledVehicle>
  )
}
