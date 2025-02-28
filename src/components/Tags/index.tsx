import { Icon } from "../Icon"
import { Tag } from "../Tag"
import { StyledTags } from "./styled"

export type Tag = {
  label: "fuel" | "shifts" | "people"
  content: string
}

// export const tags : Tag[] = [
//   {
//     label: "fuel",
//     content: "80L"
//   },
//    {
//     label: "shifts",
//     content: "Manual"
//   },
//   {
//     label: "People",
//     content: "3"
//   },

// ]

type TagsProps = {
  tags: Tag[]
}
const getIcon = (label: "fuel" | "shifts" | "people"): Icon => {
  const map: Record<string, Icon> = {
    fuel: "fuel",
    shifts: "steering",
    people: "people",
  }
  return map[label]
}

export const Tags = ({ tags }: TagsProps) => {
  return (
    <StyledTags>
      {tags.map(({ label, content }: Tag) => {
        return <Tag key={label} icon={getIcon(label)} content={content} />
      })}
    </StyledTags>
  )
}
