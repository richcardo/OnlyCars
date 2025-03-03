import { LinkType } from "../../utils/mock"
import { StyledLinksList } from "./styled"
import { Text } from "../Text"
import { useNavigate } from "react-router"
import { Button } from "../Button"

type Props = {
  link: LinkType
}

export const LinksList = ({ link }: Props) => {
  const navigate = useNavigate()
  return (
    <StyledLinksList>
      <Text variant="h4">{link.label}</Text>

      {link.items.map(({ label, path }) => {
        return (
          <li key={label}>
            <Button variant="text" color="grey" onClick={() => navigate(path)}>
              {label}
            </Button>
          </li>
        )
      })}
    </StyledLinksList>
  )
}
