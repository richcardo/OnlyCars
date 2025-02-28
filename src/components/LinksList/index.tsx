import { LinkType } from "../../utils/mock"
import { StyledLinksList } from "./styled"
import { Text } from "../Text"
import { Link } from "react-router"

type Props = {
  link: LinkType
}

export const LinksList = ({ link }: Props) => {
  return (
    <StyledLinksList>
      <Text variant="h4">{link.label}</Text>

      {link.items.map(({ label, path }) => {
        return (
          <li>
            <Link to={path}>{label}</Link>{" "}
          </li>
        )
      })}
    </StyledLinksList>
  )
}
