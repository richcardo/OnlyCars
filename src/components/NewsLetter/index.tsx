import { Button } from "../Button"
import { Input } from "../Input"
import { StyledNewsLetter } from "./styled"

export const NewsLetter = () => {
  return (
    <StyledNewsLetter>
      <Input
        type="email"
        onChange={(v) => console.log(v)}
        name={"NewsLetter"}
        placeholder="Enter your email"
      />
      <Button onClick={() => console.log("ciao")}>Send</Button>
    </StyledNewsLetter>
  )
}
