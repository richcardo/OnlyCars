import { FooterLinksType } from "../../utils/mock"
import { StyledFooterLinks } from "./styled"
import { LinksList } from "../LinksList"
import { Text } from "../Text"

type Props = {
  footerLinks: FooterLinksType
}

export const FooterLinks = ({ footerLinks }: Props) => {
  return (
    <StyledFooterLinks>
      {footerLinks.map((link) => {
        return <LinksList link={link} />
      })}
      <Text variant="h4">Newsletter</Text>
    </StyledFooterLinks>
  )
}
