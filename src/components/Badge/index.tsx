import { StyledBadge } from "./styled"
type Props = {
  content: string | number
}

export const Badge = ({ content }: Props) => {
  return <StyledBadge>{content}</StyledBadge>
}
