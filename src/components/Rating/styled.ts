import styled from "@emotion/styled"

export const StyledStar = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  z-index: 1;
`
export const StyledDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`

// export const StyledRating = styled.div<{ value: number }>`
//   --percent: ${({ value }) => `calc(${value} / 5 * 100%)`};
//   display: inline-block;
//   font-size: var(--star-size);
//   font-family: "Times";
//   &::before {
//     content: "★★★★★";
//     letter-spacing: 3px;
//     font-size: 20px;
//     background: linear-gradient(
//       90deg,
//       red var(--percent),
//       green var(--percent)
//     );
//     background-clip: text;
//     text-fill-color: transparent;
//   }
// `
