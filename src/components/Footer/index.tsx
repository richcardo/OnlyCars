import { FooterLinks } from "../FooterLinks"
import { Slogan } from "../Slogan"
import { MainFooter, Styledfooter, StyledDiv } from "./styled"
import { FOOTER_LINKS, social_links } from "../../utils/mock"
import { Image } from "../Image"
import { SocialLinks } from "../SocialLinks"
import { LegalLinkSection } from "../LegalLinksSection"

export const Footer = () => {
  return (
    <Styledfooter>
      <Image
        className="background"
        imgUrl="src\assets\Screenshot 2025-02-28 145533.png"
      />
      <MainFooter>
        <Slogan />
        <FooterLinks footerLinks={FOOTER_LINKS} />
      </MainFooter>
      <hr />
      <StyledDiv>
        <SocialLinks links={social_links} />
        <LegalLinkSection />
      </StyledDiv>
    </Styledfooter>
  )
}
