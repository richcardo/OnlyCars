import styled from "@emotion/styled"
import { ReactNode } from "react"

export const StyledHeader = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  align-items: start;
`

export const StyledTitle = styled.div<{ icon?: ReactNode }>`
  display: flex;
  justify-content: ${({ icon }) => (icon ? "start" : "space-between")};
  align-items: center;
  gap: 20px;
  width: 100%;
`
