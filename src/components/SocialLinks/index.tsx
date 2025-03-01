import { useNavigate } from "react-router"
import { Social } from "../../utils/mock"
import { IconButton } from "../Button"
import { StyledSocialLinks } from "./styled"

type Props = {
  links: Social[]
}

export const SocialLinks = ({ links }: Props) => {
  const navigate = useNavigate()
  return (
    <StyledSocialLinks>
      {links.map(({ icon, path }) => {
        return (
          <IconButton
            variant="outlined"
            color="muted"
            iconSize="xl"
            icon={icon}
            onClick={() => navigate(path)}
          />
        )
      })}
    </StyledSocialLinks>
  )
}
