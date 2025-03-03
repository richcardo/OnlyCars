import { Label } from "../Label"
import { StyledDiv, StyledInput } from "./styled"
type Props = {
  onChange: (value: string) => void
  placeholder?: string
  name: string
  label?: string
  value?: string
  type?: "text" | "email" | "password"
  backgroundShade?: 50 | 300 | 400 | 950
}
export const Input = ({
  backgroundShade = 300,
  onChange,
  placeholder = "",
  name,
  label,
  value,
  type = "text",
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value)

  return (
    <StyledDiv>
      {label && <Label label={label} />}
      <StyledInput
        backgroundShade={backgroundShade}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        id={name}
        name={name}
      />
    </StyledDiv>
  )
}
