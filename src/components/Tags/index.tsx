import { Icon } from "../Icon"
import { Tag } from "../Tag"
import { StyledTags } from "./styled"

export type Tag = {
  label: "gasoline" | "steering" | "capacity"
  content: string
}

type TagsProps = {
  technicalData: Tag[]
}
const getIcon = (label: "gasoline" | "steering" | "capacity"): Icon => {
  const map: Record<string, Icon> = {
    gasoline: "fuel",
    steering: "steering",
    capacity: "people",
  }
  return map[label]
}

export const Tags = ({ technicalData }: TagsProps) => {
  return (
    <StyledTags>
      {technicalData.map(({ label, content }: Tag) => {
        return <Tag key={label} icon={getIcon(label)} content={content} />
      })}
    </StyledTags>
  )
}
