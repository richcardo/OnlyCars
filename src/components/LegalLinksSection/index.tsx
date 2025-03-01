import { Button } from "../Button"
import { StyledLegalSection } from "./styled"

export const LegalLinkSection = () => {
  return (
    <StyledLegalSection>
      <Button variant="text" color="grey" onClick={() => console.log()}>
        2024 All Rights Reserved
      </Button>
      <Button variant="text" color="grey" onClick={() => console.log()}>
        2024 All Rights Reserved
      </Button>
      <Button variant="text" color="grey" onClick={() => console.log()}>
        2024 All Rights Reserved
      </Button>
    </StyledLegalSection>
  )
}
