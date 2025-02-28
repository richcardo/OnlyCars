import { Button } from "../Button"
import { Card } from "../Card"
import { SectionHeader } from "../SectionHeader"
import { Vehicle } from "../Vehicle"
import { StyledCarsContainer } from "./styled"

type CarsSectionProps = {
  title: string
  path: string
  vehicles: Vehicle[]
}

export const CarsSection = ({ title, path, vehicles }: CarsSectionProps) => {
  return (
    <>
      <SectionHeader
        title={title}
        rightElement={
          <Button variant="text" color="grey" onClick={() => console.log(path)}>
            View All
          </Button>
        }
      />
      <StyledCarsContainer>
        {vehicles.map((vehicle) => {
          return (
            <Card key={vehicle.carID}>
              <Vehicle vehicle={vehicle} />
            </Card>
          )
        })}
      </StyledCarsContainer>
    </>
  )
}
