import { Label } from "../Label"
import { SelectContainer, StyledSelect } from "./styled"

export type Option = {
  id: string
  name: string
}

type Props = {
  id: string
  options: Option[]
  onChange: (value: string) => void
  label?: string
}

const Item = ({ id, name }: Option) => {
  return <option value={id}>{name}</option>
}

export const Select = ({ options, onChange, label }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value)

  return (
    <SelectContainer>
      {label && <Label label={label} />}
      <StyledSelect onChange={handleChange}>
        {options.map(({ id, name }) => {
          return <Item id={id} name={name} key={id} />
        })}
      </StyledSelect>
    </SelectContainer>
  )
}
