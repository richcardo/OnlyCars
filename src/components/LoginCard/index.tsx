import { useState } from "react"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { Text } from "../../components/Text"
import { InputContainer, StyledForm, StyledFormContainer } from "./styled"
export const LoginCard = () => {
  type User = {
    username: string
    password: string
  }
  const [user, setUser] = useState<User>({ username: "", password: "" })
  console.log(user)
  return (
    <Card className="login">
      <StyledFormContainer>
        <StyledForm>
          <Text variant="h1">Login</Text>
          <InputContainer>
            <Input
              value={user.username}
              backgroundShade={50}
              name="email"
              type="email"
              placeholder="email address"
              onChange={(v) => setUser({ ...user, username: v })}
            />
            <Input
              value={user.password}
              backgroundShade={50}
              name="password"
              type="password"
              placeholder="password"
              onChange={(v) => setUser({ ...user, password: v })}
            />
          </InputContainer>

          <Button
            className="loginButton"
            color="secondary"
            onClick={() => console.log("ciao")}
          >
            Login
          </Button>
        </StyledForm>
        <Button variant="text" className="singing" onClick={() => null}>
          Sign Up
        </Button>
      </StyledFormContainer>
    </Card>
  )
}
