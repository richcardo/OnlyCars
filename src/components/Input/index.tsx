import { Label } from "../Label"
import { StyledDiv, StyledInput } from "./styled"
type Props = {
  onChange: (value: string) => void
  placeholder?: string
  name: string
  label?: string
  value?: string
  type?: "text" | "email"
}
export const Input = ({
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
