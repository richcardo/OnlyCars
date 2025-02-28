import { Icon } from "../Icon"
import { Input } from "../Input"
import { StyledSearchBar } from "./styled"

type Props = {
  className?: string
}

export const SearchBar = ({ className }: Props) => {
  return (
    <StyledSearchBar className={className}>
      <Icon icon={"lense"} color={"grey"} />
      <Input
        onChange={(value) => console.log(value)}
        placeholder="Search any car here"
        name={"search"}
      />
      <Icon icon={"mic"} color={"grey"} />
    </StyledSearchBar>
  )
}
