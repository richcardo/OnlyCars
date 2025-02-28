import { Label } from "../Label"
import { StyledRange, StyledDiv } from "./styled"
import { useState } from "react"

type Props = {
  onChange: (value: string) => void
  max: string
  min?: string
}

export const Range = ({ onChange, max, min = "0" }: Props) => {
  const initialState = Number(max) / 2
  const [value, setValue] = useState(initialState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
    return onChange(e.target.value)
  }

  return (
    <StyledDiv>
      <StyledRange
        type="range"
        min={min}
        max={max}
        onChange={handleChange}
        id="price"
        step="10"
      />
      <Label label={`Max. $${value},00`} />
    </StyledDiv>
  )
}
