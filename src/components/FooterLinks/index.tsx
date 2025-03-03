import { FooterLinksType } from "../../utils/mock"
import { StyledFooterLinks, NewsLetterContainer } from "./styled"
import { LinksList } from "../LinksList"
import { Text } from "../Text"
import { NewsLetter } from "../NewsLetter"

type Props = {
  footerLinks: FooterLinksType
}

export const FooterLinks = ({ footerLinks }: Props) => {
  return (
    <StyledFooterLinks>
      {footerLinks.map((link) => {
        return <LinksList key={link.label} link={link} />
      })}
      <NewsLetterContainer>
        <Text variant="h4">Newsletter</Text>
        <NewsLetter />
      </NewsLetterContainer>
    </StyledFooterLinks>
  )
}
