import { Label } from "../Label"
import { StyledCheckBox, StyledDiv } from "./styled"

type Props = {
  onChange: (checked: boolean) => void
  name: string
  checked: boolean
}

export const CheckBox = ({ onChange, name, checked }: Props) => {
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.checked)

  return (
    <StyledDiv>
      <StyledCheckBox
        type="checkbox"
        onChange={handleClick}
        checked={checked}
      />
      <Label label={name} />
    </StyledDiv>
  )
}
