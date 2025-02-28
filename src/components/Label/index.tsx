import { StyledLabel } from "./styled"

type Props = {
  label: string
}

export const Label = ({ label }: Props) => {
  return <StyledLabel>{label}</StyledLabel>
}
