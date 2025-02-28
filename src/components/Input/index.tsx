import { Label } from "../Label"
import { StyledDiv, StyledInput } from "./styled"
type Props = {
  onChange: (value: string) => void
  placeholder?: string
  name: string
  label?: string
  value?: string
}
export const Input = ({
  onChange,
  placeholder = "",
  name,
  label,
  value,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value)

  return (
    <StyledDiv>
      {label && <Label label={label} />}
      <StyledInput
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        id={name}
        name={name}
      />
    </StyledDiv>
  )
}
