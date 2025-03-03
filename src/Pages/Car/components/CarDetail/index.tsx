import { useEffect, useState } from "react"
import { Like } from "../../../../components/Like"
import { Rating } from "../../../../components/Rating"
import { SectionHeader } from "../../../../components/SectionHeader"
import { Vehicle } from "../../../../components/Vehicle"
import { Text } from "../../../../components/Text"
import {
  StyledCarDetail,
  TechnicalDataSection,
  SingleDataContainer,
} from "./styled"
import { Tag } from "../../../../components/Tags"
import { Price } from "../../../../components/Price"
import { Button } from "../../../../components/Button"
import { VehicleFooter } from "../../../../components/Vehicle/styled"

type CarDetailProp = {
  vehicle: Vehicle
}

const Item = ({ label, content }: Tag) => {
  return (
    <SingleDataContainer key={label}>
      <Text variant="p" shade={400}>
        {label}
      </Text>
      <Text variant="p" shade={950}>
        {content}
      </Text>
    </SingleDataContainer>
  )
}

export const CarDetail = ({ vehicle }: CarDetailProp) => {
  const [liked, setLiked] = useState<boolean>(false)
  const [rate, setRate] = useState<number>(0)
  useEffect(() => {
    setLiked(vehicle.isLiked)
    setRate(vehicle.rate)
  }, [])
  return (
    <StyledCarDetail>
      <div>
        <SectionHeader
          title={vehicle.name}
          rightElement={<Like isLiked={liked} setLiked={setLiked} />}
        />
        <Rating rate={rate} setRate={setRate} />
      </div>

      <Text variant="p" shade={400}>
        {"Test lorem ipsum"}
      </Text>

      <TechnicalDataSection>
        <SingleDataContainer>
          <Text variant="p" shade={400}>
            {"Type Vehicle"}
          </Text>
          <Text variant="p" shade={950}>
            {vehicle.type}
          </Text>
        </SingleDataContainer>
        {vehicle.technicalData.map(({ label, content }) => (
          <Item key={label} label={label} content={content} />
        ))}
      </TechnicalDataSection>
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
    </StyledCarDetail>
  )
}
