import { Icon } from "../Icon"
import { StyledTag } from "./styled"
import { Text } from "../Text"

type Props = {
  icon: Icon
  content: string
}

export const Tag = ({ icon, content }: Props) => {
  return (
    <StyledTag>
      <Icon icon={icon} color={"grey"} size="xl" />
      <Text variant="h5" shade={400} className="font-light">
        {content}
      </Text>
    </StyledTag>
  )
}
