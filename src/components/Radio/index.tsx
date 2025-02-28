import { Label } from "../Label"
import { StyledRadio, StyleDiv } from "./styled"

type Props = {
  onChange: (value: string) => void
  id: string
  name: string
}

export const Radio = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.id)
  return (
    <StyleDiv>
      <StyledRadio
        type="radio"
        value={props.id}
        onChange={handleChange}
        id={props.id}
        name={props.name}
      />
      <Label label={props.name} />
    </StyleDiv>
  )
}
