import { Color } from "../../style/theme"
import { Icon } from "../Icon"
import { SectionHeader } from "../SectionHeader"
import { Select, Option } from "../Select"
import { StyledSelectContainer, StyledContainer } from "./styled"

type SelectionProps = {
  iconColor: Color
  title: string
  selects: Select[]
}

export type Select = {
  name: string
  id: string
  options: Option[]
}

export const SelectionFilter = ({
  iconColor,
  title,
  selects,
}: SelectionProps) => {
  return (
    <StyledContainer>
      <SectionHeader
        title={title}
        icon={<Icon icon={"circle"} color={iconColor} />}
      />
      <StyledSelectContainer>
        {selects.map(({ name, id, options }) => {
          return (
            <>
              <Select
                key={id}
                label={name}
                id={id}
                options={options}
                onChange={(v) => console.log(v)}
              />
            </>
          )
        })}
      </StyledSelectContainer>
    </StyledContainer>
  )
}
