import { useParams } from "react-router"
import {
  ListImageContainer,
  MainImageContainer,
  StyledMainContainer,
} from "./styled"
import { vehicles } from "../../../../utils/mock"
import { CarDetail } from "../CarDetail"
import { Image } from "../../../../components/Image"
import { Card } from "../../../../components/Card"
import { useState } from "react"
const imgs: string[] = [
  "../../src/assets/Immagine WhatsApp 2025-02-13 ore 21.19.52_72ebef00.jpg",
  "https://images.pexels.com/photos/30840677/pexels-photo-30840677/free-photo-of-scenic-seascape-with-rugged-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/30926674/pexels-photo-30926674/free-photo-of-elegant-ballet-dancer-in-white-dress-with-red-hearts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]
export const Main = () => {
  const { id } = useParams()
  const car = vehicles.find(({ carID }) => id === carID)
  const [currImg, setCurrImg] = useState<string>(
    "../../src/assets/Immagine WhatsApp 2025-02-13 ore 21.19.52_72ebef00.jpg",
  )
  return (
    <StyledMainContainer>
      <MainImageContainer>
        <Image imgUrl={currImg} />
      </MainImageContainer>

      {car && (
        <Card className="card">
          <CarDetail vehicle={car} />
        </Card>
      )}
      {imgs.map((path) => {
        return (
          <ListImageContainer
            onClick={(e) => setCurrImg(e.target.attributes.src.nodeValue)}
            className={currImg === path ? "selected" : undefined}
          >
            <Image imgUrl={path} />
          </ListImageContainer>
        )
      })}
    </StyledMainContainer>
  )
}
