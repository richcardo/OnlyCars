import { FooterLinks } from "../FooterLinks"
import { Slogan } from "../Slogan"
import { MainFooter, Styledfooter } from "./styled"
import { FOOTER_LINKS } from "../../utils/mock"

export const Footer = () => {
  return (
    <Styledfooter>
      <MainFooter>
        <Slogan />
        <FooterLinks footerLinks={FOOTER_LINKS} />
      </MainFooter>
    </Styledfooter>
  )
}
