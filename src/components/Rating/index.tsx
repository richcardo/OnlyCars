import { useState } from "react"
import { StyledDiv, StyledStar } from "./styled"
import { Icon, Icon as Icons } from "../Icon"

type RatingProps = {
  rate: number
  setRate?: (rate: number) => void
}

type ItemProps = RatingProps & {
  hover: number
  setHover: (numb: number) => void
  value: number
}

const Star = ({ setRate, rate, value, hover, setHover }: ItemProps) => {
  const { icon, color } = chooseIcon(value, hover, rate, !!setRate)
  const roundRate = (rate: number) => {
    return rate % 1 < 0.5 ? value - 0.5 : value
  }
  const [mouseX, setMouseX] = useState(0)
  const starWidth = document.getElementById(`star${value}`)?.offsetWidth ?? 30

  return (
    <StyledStar
      onMouseMove={(e) => {
        setMouseX(e.clientX)
        setHover(mouseX / starWidth)
      }}
      onMouseLeave={() => setHover(0)}
      onClick={() =>
        setRate ? setRate(roundRate(mouseX / starWidth)) : undefined
      }
      id={`star${value}`}
    >
      <Icon icon={icon} color={color} size="10x" />
    </StyledStar>
  )
}
const VALUES = Array.from({ length: 5 }).map((_, index) => index + 1)

export const Rating = ({ rate, setRate }: RatingProps) => {
  const [hover, setHover] = useState(0)
  return (
    <StyledDiv>
      {VALUES.map((value) => (
        <Star
          key={value}
          rate={rate}
          value={value}
          setRate={setRate}
          hover={hover}
          setHover={setHover}
        />
      ))}
    </StyledDiv>
  )
}

function chooseIcon(
  value: number,
  hover: number,
  rate: number,
  isEditing: boolean,
): { icon: Icons; color: "warning" | "grey" } {
  if (!isEditing) {
    const diff = rate - value
    const module = rate % 1
    return diff >= 0
      ? { icon: "solidStar", color: "warning" }
      : module < 0.5 || diff < -1
        ? { icon: "star", color: "grey" }
        : { icon: "halfStar", color: "warning" }
  }

  const currentRate = hover !== 0 ? hover : rate
  const diff = currentRate - value
  const module = currentRate % 1

  return diff <= -1
    ? { icon: "star", color: "grey" }
    : diff >= 0 || module > 0.5
      ? { icon: "solidStar", color: "warning" }
      : { icon: "halfStar", color: "warning" }
}
