import { IconButton } from "../Button"
import { Card } from "../Card"
import { Select, SelectionFilter } from "../SelectionFilter"
import { FiltersContainer } from "./styled"

type FilterProps = {
  selects: Select[]
}

export const FilterSelect = ({ selects }: FilterProps) => {
  return (
    <FiltersContainer>
      <Card className="filter-card">
        <SelectionFilter
          selects={selects}
          iconColor="secondary"
          title="Pick - Up"
        />
      </Card>
      <IconButton
        iconColor="muted"
        size="large"
        iconSize="2x"
        icon={"switcher"}
        onClick={() => console.log("ciao")}
      />
      <Card className="filter-card">
        <SelectionFilter
          selects={selects}
          iconColor="primary"
          title="Drop - Off"
        />
      </Card>
    </FiltersContainer>
  )
}
